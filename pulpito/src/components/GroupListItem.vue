<template>
    <li class="group-card">
        <div class="card-image">
            {{group.service.title}}
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
            </div>
            <div class="media-content">
                <p class="subtitle is-6">Grupo compartido de</p>
                <p class="title is-4">{{group.owner}}</p>
            </div>
            </div>

            <div>
             <p>Precio Mensual: {{group.price}} €</p>
             <p>Sitios Disponibles: {{group.usersIn.length}}/{{group.maxUsers}}</p>
            </div>
  </div>
        <button class="button-blue">Unirse</button>
</li>
    
</template>

<script>
import '../assets/main.css'

export default {
    name: "GroupListItem",
    props: ["group"],

    
    mounted() {
        console.info(this.group);
    },
    
    
    watch: {
        checked(newValue) {
            this.$emit('toggleComplete',{id:this.group['.key'], completed: newValue})
        }
    }
};
</script>
<style>

.group-card {
    width: 250px;
    height: 450px;
    border-radius:150px;
    margin: 30px;
    justify-content: center;
    background-color: rgb(245, 250, 255);
    box-shadow: rgb(0 0 0 / 20%) 1px 4px 6px;
    border-radius: 35px;
}

.card-content, .media-content {
    margin: 0px;
}


li {
    text-decoration: none;
    list-style: none;
}
</style>