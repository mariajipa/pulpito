<template>
    <div class="contentCenter">
        <h1>¿En qué quieres ahorrar?</h1>

        <div class="carousel"
            arrow>
            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/streaming.png" alt="palomitas">
                <h2>Streaming</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/music.png" alt="cascos">
                <h2>Música</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/fitness.png" alt="ohm">
                <h2>Fitness</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/news.png" alt="periodico enrollado">
                <h2>Noticias</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/gaming.png" alt="marcianito">
                <h2>Gaming</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/vpn.png" alt="escudo VPN">
                <h2>VPN</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/energia.png" alt="bombilla">
                <h2>Energía</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/phone.png" alt="smartphone">
                <h2>Móvil + Internet</h2>
                </div>            
            </div>

            <div class="category-card">
                <div>
                    <img src="../assets/imgCategories/software.png" alt="ordenador">
                <h2>Software</h2>
                </div>            
            </div>

        </div>

        <div>
             <h1>Grupos compartidos</h1>
        </div>

        <div class="groups-list">
            <ul 
            v-if="groups !== null"></ul>
        <group-list-item 
        v-for="group in groups"
        :key="group['.key']"
        :group="group"
         />
        </div>
    </div>
</template>

<script>
import '../assets/main.css'
import {GroupsList} from '@/modules/firebase'
import GroupListItem from '@/components/GroupListItem.vue'

export default {
    name: 'DashboardPage',
    components: {
        GroupListItem,
    },

    data() {
        return {
            groups: [],
        }
    },

    firestore() {
        return {
            groups: GroupsList.orderBy('created_at', 'desc'),
        };
    }

             
}

</script>

<style>
.contentCenter h1 {
    margin:50px;
}

.groups-list {
    margin: 40px;
    display: flex;
}

.category-card {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(245, 250, 255);
    box-shadow: rgb(0 0 0 / 20%) 1px 4px 6px;
    border-radius: 35px;
    padding: 0.5rem 1rem;
    width: 140px;
    min-width: 120px;
    height: 140px;
    cursor: pointer;
    margin: 5px;
    color: rgb(121, 121, 121);
}

.carousel {
    height: 180px;
    margin:20px;
    display:flex;
}    

.carousel img {
    width: 30px;
    height: 30px;
}

</style>