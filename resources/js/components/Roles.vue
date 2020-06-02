<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">User Roles</h3>

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
                                    <!-- <th>Users</th> -->
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="role in roles" :key="role.id">
                                    <td>{{ role.id }}</td>
                                    <td>{{ role.name | titleText }}</td>
                                    <!-- <td>{{ role.email }}</td> -->
                                    <td>
                                        <a href="#" @click="editModal(role)"><i class="fa fa-edit blue"></i></a>
                                        /
                                        <a href="#" @click="deleteRole(role.id)"><i class="fa fa-trash red"></i></a>
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
                        <h5 v-show="editmode" class="modal-title" id="addNewLabel">Update Role</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateRole() : createRole()">
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
                roles: {},
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
            loadRoles() {
                axios.get("backend/role").then(({ data }) => (this.roles = data ));
            },
            createRole() {
                this.$Progress.start();
                this.form.post('backend/role').then(() => {

                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    toast.fire('Success', 'Role Created Successfully', 'success', 5000);
                    this.$Progress.finish();
                }).catch(() => {
                    this.$Progress.fail();
                    toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
                });
            },
            deleteRole(id){
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
                        this.form.delete('backend/role/'+id).then(() => {
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
            editModal(role) {
                this.editmode = true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(role);
            },
            updateRole() {
                this.$Progress.start();
                this.form.put('backend/role/'+this.form.id)
                .then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    swal.fire(
                        'Updated!',
                        'Role Data Updated Successfully',
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
            this.loadRoles();
            Fire.$on('AfterCreate',() => {
                this.loadRoles();
            });
            console.log('Roles Component mounted.');
        }
    }
</script>
