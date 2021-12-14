<template>
  <form>
    <h1 class="titulo">Login</h1>
        
        <button class="button-red" @click="loginWithGoogle" >Conectar con Google</button>

        <hr>

        <b-field label="Email"
            type="is-danger">
            <b-input 
                v-model="user.username" type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input 
                v-model="user.password"
                type="password"
                password-reveal>
            </b-input>
        </b-field>
        <div type="is-danger" v-if="formError !== ''">
          {{ formError }}
        </div>
        <button type="submit" class="button-green" @click.prevent="login">
          Login
        </button>
        
        <br>

        <a
        @click="gotToResetPassword"
        >¿Has olvidado tu contraseña?</a>

        <br>

        <a
        @click="gotToRegisterPage"
        >¿Aún no tienes cuenta? Regístrate</a>

        <hr>

  </form>
</template>

<script>
import '../assets/main.css'
import firebase from 'firebase/app'
import {Auth} from '@/modules/firebase';


export default {
  name: "LoginPage",
  data() {
    return {
      formError: "",
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider()
      try{
        const result = await firebase.auth().signInWithPopup(provider)
        console.log(result)
        this.$router.push({ name: 'dashboard' })
      }catch(error){
        console.log(error)
      }
    },
    async login() {
      this.formError = "";
      if (this.user.username === "") {
        this.formError = "Debes introducir tu email";
        return;
      }
      if (this.user.password.length < 6) {
        this.formError = "La contraseña debe tener al menos 6 caracteres.";
        return;
      }
      //llamar a firebase auth método login
      try{
          const response = await Auth.signInWithEmailAndPassword(this.user.username,this.user.password)
          console.info(response)
          //no es necearia la siguiente línea, al identificarse, el listener de onAuthStateChanged hace el cambio de ruta
          //this.$router.replace({name: 'home'})
      }catch(e){
          this.formError = e.message
      }
    },
    gotToRegisterPage() {
      this.$router.push({ name: "register" });
    },
    gotToResetPassword() {
      this.$router.push({ name: "reset_password" });
    },
  },
};
/*export default {
  name: "LoginPage",
  data() {
    return {
      formError: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider()
      try{
        const result = await firebase.auth().signInWithPopup(provider)
        console.log(result)
        this.$router.push({ name: 'dashboard' })
      }catch(error){
        console.log(error)
      }
    },
    async login() {
      this.formError = "";
      if (this.user.email === "") {
        this.formError = "Debes introducir tu email";
        return;
      }

      //llamar a firebase auth método login
      try{
          const response = await Auth.signInWithEmailAndPassword(this.user.email,this.user.password)
          console.info(response)
          
      }catch(e){
          this.formError = e.message
      }
    },
    gotToRegisterPage() {
      this.$router.push({ name: "register" });
    },
    gotToResetPassword() {
      this.$router.push({ name: "reset_password" });
    },
  },
};*/

</script>

<style scoped>

</style>