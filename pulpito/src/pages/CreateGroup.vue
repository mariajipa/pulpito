<template>
    <section>
        <h1>Configura tu nuevo grupo</h1>
        <b-field label="Servicio">
            <b-select placeholder="Select a character" icon="account" rounded>
                <optgroup label="Streaming">
                    <option value="Disney+">Disney+</option>
                    <option value="HBO MAX">HBO MAX</option>
                    <option value="Atresplayer">Atresplayer</option>
                    <option value="Filmin">Filmin</option>
                    <option value="Discovery+">Discovery+</option>
                    <option value="Mubi">Mubi</option>
                    <option value="Crunchyroll">Crunchyroll</option>
                    <option value="Mitele Plus">Mitele Plus</option>
                    <option value="Starzplay">Starzplay</option>
                </optgroup>

                <optgroup label="Noticias">
                    <option value="EL PAÍS">EL PAÍS</option>
                    <option value="LA VANGUARDIA">LA VANGUARDIA</option>
                </optgroup>

                <optgroup label="Nuevas categorías">
                    <option value="Introduzca un nuevo servicio"><input type="text"></option>
                
                </optgroup>
            </b-select>
        </b-field>

        <b-field label="Número máximo de participantes que puede acoger este grupo">
            <b-numberinput      v-model="numberPlaceholder" placeholder="2" :min="2" ></b-numberinput>
        </b-field>

        <b-field label="Seleccione el precio">
            <b-numberinput      v-model="numberPlaceholder" placeholder="2" :min="2" ></b-numberinput>
        </b-field>

        <button class="button-green"> Crear grupo</button>

    </section>
</template>

<script>
    const data = require('@/data/sample.json')

    export default {
        data() {
            return { data }
        }
    }
</script>

<script>
export default {
    name: 'CreateGroupPage'
}
</script>

<style>
section {
    width:50%;
    margin:auto;
    align-items: center;
}
</style>