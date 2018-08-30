<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <div class="form-group">
                        <label for="firstName">Firstname</label>
                        <input id="firstName" type="text" class="form-control" v-model="userData.firstname">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Lastname</label>
                        <input id="lastName" type="text" class="form-control" v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="text" class="form-control" v-model="userData.email">
                    </div>
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" v-model="userData.password"> 
                    </div>
                    <div class="form-group">
                        <label for="male">
                            <input
                                    type="radio"
                                    id="yes"
                                    value="Yes"
                                    v-model="stored"> Yes
                        </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    id="no"
                                    value="No"
                                    v-model="stored"> No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <app-fullname v-model="FullName"></app-fullname>

                    <button class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <div class="row" v-show="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.firstname }} {{ userData.lastName }}</p>
                        <p>Mail: {{userData.email }}</p>
                        <p>Password: {{userData.password }}</p>
                        <p>Store in Database?: {{ stored }}</p>
                        <p>Full name is: {{ FullName }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './components/Fullname.vue';

    export default {
        data() {
            return {
                userData: {
                    firstname: '',
                    lastname: '',
                    password: '',
                    email: ''
                },
                stored: 'No',
                isSubmitted: false,
                FullName: 'john Doe',
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullname: Fullname
        }
    }
</script>

<style>
</style>
