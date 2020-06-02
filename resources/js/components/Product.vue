<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Products</h3>

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
                                <tr v-for="product in products" :key="product.id">
                                    <td>{{ product.id }}</td>
                                    <td>{{ product.name | titleText }}</td>
                                    <td>
                                        <a href="#" @click="editModal(product)"><i class="fa fa-edit blue"></i></a>
                                        /
                                        <a href="#" @click="deleteProduct(product.id)"><i class="fa fa-trash red"></i></a>
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
                        <h5 v-show="editmode" class="modal-title" id="addNewLabel">Update Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateProduct() : createProduct()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" placeholder="Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.desc" name="desc" placeholder="Description" class="form-control" :class="{ 'is-invalid': form.errors.has('desc') }"></textarea>
                                <has-error :form="form" field="desc"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-on:change="onFileChange" type="file" name="image" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
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
                products: {},
                form: new Form({
                    id : '',
                    name : '',
                    desc : '',
                    image : ''
                }),
            }
        },
        methods: {
            newModal() {
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },
            loadProducts() {
                axios.get("backend/product").then(({ data }) => (this.products = data.data ));
            },
            onFileChange(e){
                this.form.image = e.target.files[0];
            },
            createProduct(e) {   
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
    
                let formData = new FormData();

                this.formData.append('name', this.form.name);
                this.formData.append('desc', this.form.desc);
                this.formData.append('image', this.form.image);
                this.$Progress.start();
                axios.post('/backend/product', this.formData, config).then( () => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    toast.fire('Success', 'Product Created Successfully', 'success', 5000);
                    this.$Progress.finish();
                }).catch( ()  => {
                    toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
                    this.$Progress.fail();
                });
            },
            deleteProduct(id){
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
                        this.form.delete('backend/product/'+id).then(() => {
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
            editModal(product) {
                this.editmode = true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(product);
            },
            updateProduct() {
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
    
                let formData = new FormData();

                this.formData.append('name', this.form.name);
                this.formData.append('desc', this.form.desc);
                this.formData.append('image', this.form.image);
                this.$Progress.start();
                axios.post('/backend/product', this.formData, config).then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    swal.fire(
                        'Updated!',
                        'Product Data Updated Successfully',
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
            this.loadProducts();
            Fire.$on('AfterCreate',() => {
                this.loadProducts();
            });
            console.log('Products Component mounted.');
        }
    }
</script>
