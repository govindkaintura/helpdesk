<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>

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
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Registered At</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.name | titleText }}</td>
                                    <td>{{ user.email }}</td>
                                    <td v-for="role in user.roles" :key="role.id">
                                        {{ role.name | titleText }}
                                    </td>
                                    <td>{{ user.created_at | customDate }}</td>
                                    <td>
                                        <a href="#" @click="editModal(user)"><i class="fa fa-edit blue"></i></a>
                                        /
                                        <a href="#" @click="deleteUser(user.id)"><i class="fa fa-trash red"></i></a>
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
                        <h5 v-show="editmode" class="modal-title" id="addNewLabel">Update User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateUser() : createUser()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" placeholder="Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email" placeholder="Email Address" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.bio" id="bio" name="bio" placeholder="Short bio for user (Optional)" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>
                            <div class="form-group">
                                <select name="type" id="type" v-model="form.type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                    <option value="" disabled>Select User Role</option>
                                    <option v-for="role in roles" :key="role.id" :value="role.id"> {{ role.name | titleText }} </option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password" id="password" placeholder="Password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
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
                users: {},
                roles: {},
                form: new Form({
                    id : '',
                    name : '',
                    email : '',
                    password : '',
                    type : '',
                    bio : '',
                    photo : ''
                })
            }
        },
        methods: {
            newModal() {
                this.editmode = false;
                this.form.reset();
                Fire.$emit('AfterModelShow');
                $('#addNew').modal('show');
            },
            loadUsers() {
                axios.get("backend/user").then(({ data }) => (this.users = data.data ));
            },
            loadRoles() {
                axios.get("backend/role").then(({ data }) => (this.roles = data ));
            },
            createUser() {
                this.$Progress.start();
                this.form.post('backend/user').then(() => {

                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    toast.fire('Success', 'User Created Successfully', 'success', 5000);
                    this.$Progress.finish();
                }).catch(() => {
                    this.$Progress.fail();
                    toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
                });
            },
            deleteUser(id){
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
                        this.form.delete('backend/user/'+id).then(() => {
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
            editModal(user) {
                this.editmode = true;
                this.form.reset();
                Fire.$emit('AfterModelShow');
                $('#addNew').modal('show');
                this.form.fill(user);
            },
            updateUser() {
                this.$Progress.start();
                this.form.put('backend/user/'+this.form.id)
                .then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    swal.fire(
                        'Updated!',
                        'User Information Updated Successfully',
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
            this.loadUsers();
            this.loadRoles();
            // setInterval(() => this.loadUsers() , 3000);
            // setInterval(() => this.loadRoles() , 3000);

            Fire.$on('AfterCreate',() => {
                this.loadUsers();
            });
             Fire.$on('AfterModelShow',() => {
                this.loadRoles();
            });
            console.log('Users Component mounted.');
        }
    }
</script>
