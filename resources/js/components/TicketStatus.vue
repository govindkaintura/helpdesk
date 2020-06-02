<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Ticket Statues</h3>

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
                                    <th>Color</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="status in statuses" :key="status.id">
                                    <td>{{ status.id }}</td>
                                    <td>{{ status.name | titleText }}</td>
                                    <td><span class="badge badge-success">{{ status.color }}</span></td>
                                    <td>
                                        <a href="#" @click="editModal(status)"><i class="fa fa-edit blue"></i></a>
                                        /
                                        <a href="#" @click="deleteTicketStatus(status.id)"><i class="fa fa-trash red"></i></a>
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
                        <h5 v-show="editmode" class="modal-title" id="addNewLabel">Update Ticket Status</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateTicketStatus() : createTicketStatus()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" placeholder="Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.color" type="text" name="color" placeholder="color" class="form-control" :class="{ 'is-invalid': form.errors.has('color') }">
                                <has-error :form="form" field="color"></has-error>
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
                statuses: {},
                form: new Form({
                    id : '',
                    name : '',
                    color : ''
                })
            }
        },
        methods: {
            newModal() {
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },
            loadTicketStatus() {
                axios.get("backend/status").then(({ data }) => (this.users = data.data ));
            },
            createTicketStatus() {
                this.$Progress.start();
                this.form.post('backend/status').then(() => {

                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    toast.fire('Success', 'Ticket Status Created Successfully', 'success', 5000);
                    this.$Progress.finish();
                }).catch(() => {
                    this.$Progress.fail();
                    toast.fire('Failed', 'There was something wrong.', 'failed', 5000);
                });
            },
            deleteTicketStatus(id){
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
                        this.form.delete('backend/status/'+id).then(() => {
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
            editModal(status) {
                this.editmode = true;
                this.form.reset();
                Fire.$emit('AfterModelShow');
                $('#addNew').modal('show');
                this.form.fill(status);
            },
            updateTicketStatus() {
                this.$Progress.start();
                this.form.put('backend/status/'+this.form.id)
                .then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');
                    swal.fire(
                        'Updated!',
                        'Ticket Status Data Updated Successfully',
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
            this.createTicketStatus();

            Fire.$on('AfterCreate',() => {
                this.createTicketStatus();
            });
            console.log('Ticket Status Component mounted.');
        }
    }
</script>
