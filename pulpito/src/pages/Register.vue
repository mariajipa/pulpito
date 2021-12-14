<template>
    <form>
      <h1 class="titulo">Regístrate</h1>

      <button class="button-red" @click="loginWithGoogle" >Registro con Google</button>

      <hr> 

      <p style="margin:30px">o mediante email</p>


      <div>

      <b-field label="Email">
          <b-input type="email"
              v-model="userData.email"
              maxlength="30">
          </b-input>
      </b-field>

      <b-field label="Contraseña">
          <b-input type="password"
              v-model="userData.password"
              password-reveal>
          </b-input>
      </b-field>

      <b-message v-if="formError !== ''" type="is-danger">
            {{formError}}
        </b-message>

      <p style="margin:30px">Al registrarme, acepto los Términos y Condiciones de Pulpito</p>

      <button
        type="submit"
        class="button-green"
        @click.prevent="createAccount">
          Registrarse
        </button>
      </div>

    </form>
</template>

<script>
import '../assets/main.css'
import firebase from 'firebase/app'
import {Auth} from '@/modules/firebase';

export default {
  name: "RegisterPage",
  data() {
    return {
      formError: "",
      userData: {
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
    async createAccount() {
      this.formError = "";

      console.info(this.userData.email);
      if (this.userData.email === "") {
        this.formError = "Debes introducir tu email";
        return;
      }

      if (this.userData.password.length < 6) {
        this.formError = "La contraseña debe tener al menos 6 caracteres.";
        return;
      }
      //lógica para registrar cuenta
      console.info("Ejecutamos lógica del registro");
      try {
        const result = await Auth.createUserWithEmailAndPassword(
          this.userData.email,
          this.userData.password
        );

        console.info(result)

      } catch (e) {
        this.formError = e.message;
      }
    },
    goToLoginPage() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>
section {
  width: 50%;
}
</style>