<template>
  <header>
      <div class="header">
          <a href="http://localhost:8080/">
              <img
                  src="../assets/WhiteLogoPulpo.png"
                  alt="Logo blanco de la aplicación Pulpo"
              >
          </a>

          <button class="button-white" ><a  href="/dashboard">¿Qué quieres compartir?</a></button>

          <div class="right">
          <div class="buttons">
            <a style="color:white" href="#">Preguntas Frecuentes</a>
            <button class="button-white" ><a  href="/create-group">Crear grupo</a></button>
            <button v-if="hasSession == false" class="button-white"><a  id="border-right" href="/register">Registrarse</a>
            <a href="/login">Login</a>
            </button>
            <button class="button-white" v-if="hasSession">
              <a style="color:midnightblue"
                href="#"
                @click.prevent="closeSession"
                >Logout</a>
            </button>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import '../assets/main.css'
import {Auth} from '@/modules/firebase';

export default {
  name: "Header",
  props: {
    hasSession: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      routes: [
        {
          path: "/login",
          name: "login",
          label: "Login",
          showWithSession: false,
          showWithoutSession: true,
        },
      ],
    };
  },
  methods: {
    async closeSession() {
      try {
        await Auth.signOut();
        if (this.$route.name !== "home") {
          this.$router.push({ name: "home" });
        }
      } catch (e) {
        console.error(e.message);
      }
    },
  }
}
</script>

<style>
.header {
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #007bff;
  position: sticky;
  top:0;
  bottom:0;
  justify-content: space-between;
  display: flex;
}

header img {
    max-width: 150px;
}

.right {
  float:right;
}

img {
  margin-top:15px;
}

#border-right {
    border-right:solid midnightblue 2px;
    padding-right: 15px;
}
</style>
