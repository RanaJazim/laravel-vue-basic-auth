<template>
    <div>
        <h3 class="text-center">Register Form</h3>

        <template v-if="!isLoading">
            <div class="row">
                <div class="col-md-6 offset-3">
                    <form @submit.prevent="submitRegistration">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username"
                                   v-model="register.name" class="form-control">
                            <div class="mt-2">
                                <p style="color: red" v-if="!$v.register.name.required">
                                    Username is required
                                </p>
                                <p style="color: red" v-if="!$v.register.name.minLength">
                                    Minimun Length is 5
                                </p>
                                <p style="color: red" v-if="!$v.register.name.maxLength">
                                    Maximum Length is 30
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"
                                   v-model="register.email" class="form-control">
                            <div class="mt-2">
                                <p style="color: red" v-if="!$v.register.email.required">
                                    Email is required
                                </p>
                                <p style="color: red" v-if="!$v.register.email.email">
                                    Not valid Email
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"
                                   v-model="register.password" class="form-control">
                            <div class="mt-2">
                                <p style="color: red" v-if="!$v.register.password.required">
                                    Password is required
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password_confirmation">Confirm Password</label>
                            <input type="password" id="password_confirmation"
                                   name="password_confirmation"
                                   v-model="register.password_confirmation"
                                   class="form-control">
                            <div class="mt-2">
                                <p style="color: red" v-if="!$v.register.password_confirmation.required">
                                    Password Confirmation is required
                                </p>
                                <p style="color: red" v-if="!$v.register.password_confirmation.sameAsPassword">
                                    Password is not match
                                </p>
                            </div>
                        </div>

                        <input :disabled="$v.register.$invalid" type="submit" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </template>

        <template v-if="isLoading">
            <div style="margin-left:50%" class="spinner-border"></div>
        </template>

    </div>
</template>

<script>
    import { register } from "../validations/register";

    export default {
        name: "Register",

        data() {
            return {
                register: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                isLoading: false
            }
        },

        validations: {
          register: register
        },

        methods: {
            submitRegistration() {
                this.isLoading = true;
                console.log('Register successfully');
                this.handleRegister();
            },

            clearFields() {
              this.register.name = '';
              this.register.email = '';
              this.register.password = '';
              this.register.password_confirmation = '';
            },

            handleRegister() {
                const register = this.register;
                this.$http.post('/api/auth/register', register)
                    .then(response => {
                        this.isLoading = false;
                        this.$store.dispatch('setUser', response.data.user);
                        console.log(response.data)
                    })
                    .catch(error => {
                        this.isLoading = false;
                        console.log(error);
                    });
            }
        }

    }
</script>

<style scoped>

</style>
