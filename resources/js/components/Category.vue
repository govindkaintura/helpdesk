<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Catagories</h3>

                        <div class="card-tools">
                            <button class="btn btn-success" @click="newModal()">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="category in categories" :key="category.id">
                                    <td>{{ category.id }}</td>
                                    <td>{{ category.name | titleText }}</td>
                                    <td>
                                        <a href="#" @click="editModal(category)"><i class="fa fa-edit blue"></i></a>
                                        /
                                        <a href="#" @click="deleteCategory(category.id)"><i class="fa fa-trash red"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-show="!editmode" class="modal-title" id="addNewLabel">Add New</h5>
                        <h5 v-show="editmode" class="modal-title" id="addNewLabel">Update Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateCategory() : createCategory()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" placeholder="Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                            <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                editmode: false,
                categories: {},
                form: new Form({
                    id : '',
                    name : ''
                })
            }
        },
        methods: {
            newModal() {
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },
            loadCategories() {
                axios.get("backend/category").then(({ data }) => (this.categories = data.data ));
            },
            createCategory() {
                this.$Progress.start();
                this.form.post('backend/category').then(() => {

                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    toast.fire('Success', 'Category Created Successfully', 'success', 5000);
                    this.$Progress.finish();
                }).catch(() => {
                    this.$Progress.fail();
                    toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
                });
            },
            deleteCategory(id){
                swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    //send result to server
                    if (result.value) {
                        this.form.delete('backend/category/'+id).then(() => {
                            swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            Fire.$emit('AfterCreate');
                        }).catch(() => {
                            swal.fire(
                                'Failed!',
                                'There was something wrong.',
                                'warning'
                            );
                        });
                    }
                });
            },
            editModal(category) {
                this.editmode = true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(category);
            },
            updateCategory() {
                this.$Progress.start();
                this.form.put('backend/category/'+this.form.id)
                .then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    swal.fire(
                        'Updated!',
                        'category data Updated Successfully',
                        'success'
                    );
                    this.$Progress.finish();
                })
                .catch(() => {
                    this.$Progress.fail();
                    swal.fire(
                        'Failed!',
                        'There was something wrong.',
                        'warning'
                    );
                });
            }
        },
        created() {
            this.loadCategories();
            Fire.$on('AfterCreate',() => {
                this.loadCategories();
            });
            console.log('Category Component mounted.');
        }
    }
</script>
