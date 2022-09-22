<template>
    <div class="login-page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <div class="logo">
                            <img src="assets/images/login/logo.png" alt="">
                        </div>
                        <div class="login-form-wrap">
                            <form>
                                <div class="form-group">
                                    <input type="text" v-model="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="User ID">
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="password" class="form-control"
                                        id="exampleInputPassword1" placeholder="Password">
                                </div>

                                <button class="btn login-btn" @click.prevent="logIn">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <img src="assets/images/login/vactor-01.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        HTTP
    } from "../http-common";
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            }
        },
        methods: {
            async logIn() {
                // console.warn("logIn", this.email, this.password);
                let result = await HTTP.get(`users?email=${this.email}&password=${this.password}`);

                console.warn(result);
                if (result.status == 200 && result.data.length>0) {
                    localStorage.setItem('user_info',JSON.stringify(result.data[0]))
                    this.$router.push({name:"Dashboard"})
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user_info');
            if (user) {
                this.$router.push({
                    name: "Dashboard"
                });
            }
        }
    }
</script>