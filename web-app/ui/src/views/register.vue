<template>
    <div>
        <Nav></Nav>
        <div class="container">
            <div class="row">
                
                <div col="col">
                </div>
                <div col="col">
                                        <br>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control"
                            v-model="email"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" 
                            v-model="password"
                            class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <br>
                        <button type="submit" @click="register" class="btn btn-primary">Register</button>
                        <br>
                        <a class="btn">Login
                        <router-link to="/login"></router-link>
                        </a>
                </div>
                <div col="col"></div>
            </div>
        </div>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import Nav from '../components/Nav.vue'
import firebase from "firebase"


export default {
 name:'Register',
 components: {
    Nav
  },
 data() {
     return {
         email : "",
         password : "",
     }
 },
 methods : {
    register : function() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password).
      then(() => {
        alert('Successfully registered! Please login.');
        this.$router.push('/dashboard');
      })
      .catch(error => {
        alert(error.message);
      });
    }
 }   
}
</script>

<style scoped>

</style>