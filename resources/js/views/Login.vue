<template>
    <div>
        <h3 class="text-center">Login Form</h3>



        <template v-if="!isLoading">
            <div style="margin-top: 30px" class="row">
                <div class="col-md-6 offset-3">
                    <form @submit.prevent="submitLogin">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"
                                   v-model="login.email" class="form-control">
                            <div class="mt-2">
                                <p v-if="!$v.login.email.required" style="color: red">Email is required</p>
                                <p v-if="!$v.login.email.email" style="color: red">This is not valid email</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"
                                   v-model="login.password" class="form-control">
                            <div class="mt-2">
                                <span v-if="!$v.login.password.required" style="color: red">Password is required</span>
                            </div>
                        </div>

                        <input :disabled="$v.login.$invalid" type="submit" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </template>

        <div v-if="isLoading">
            <div style="margin-left:50%" class="spinner-border"></div>
        </div>

    </div>
</template>

<script>
    import {myLogin} from '../validations/login'

    export default {
        name: "Login",

        data() {
            return {
                login: {
                    email: '',
                    password: '',
                },
                isLoading: false,
            }
        },

        validations: {
          login: myLogin
        },

        methods: {
          submitLogin() {
              this.isLoading = true;
              console.log('Submitted the login form');
              this.handleLogin();
          },

          clearFields() {
              this.login.email = '';
              this.login.password = '';
          },

          handleLogin() {
              const login = this.login;
              this.$http.post('/api/auth/login', login)
                .then(response => {
                    console.log(response);
                    this.isLoading = false;
                    this.clearFields();
                })
                .catch(error => {
                    console.log(error);
                    this.isLoading = false;
                    this.clearFields();
                });
              // this.clearFields();
          }
        },

    }
</script>

<style scoped>

</style>
