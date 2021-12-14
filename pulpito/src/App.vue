<template>
  <div id="app">
    <Header :has-session="hasSession" />
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import {Auth} from '@/modules/firebase';


export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      hasSession: true,
      currentUser: null,
    };
  },
  mounted() {
    Auth.onAuthStateChanged((user) => {
      console.info("cambio de estado de sesión", user)
      this.hasSession = (user !== null)
      
      if(this.hasSession && (this.$route.name === 'login' ||
      this.$route.name === 'register' ||
      this.$route.name === 'reset_password')){
        try{
          this.$router.replace({name: 'home'})
        }catch(e){
          console.error(e.message)
        }
      }
    });
  },
};
</script>

<style>
#app {
  font-family:'Raleway', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
}
</style>
