<template>
    <div>
        <main>
            <h1>Ahorra en tus gastos de... </h1>
            <h3>Ahorra compartiendo los gastos de suscripciones digitales con amigos</h3>
            <button class="button-green" ><a href="http:/dashboard">Ver Grupos</a></button>
        </main>

        <div class="content">
            <h1>
                Únete a un grupo compartido y ahorra hasta un 75%
            </h1>
            <p>
                Descubre los grupos compartidos de Pulpo y despreocúpate uniéndote a un grupo donde compartirás gastos de forma legal y con pagos automatizados.
            </p>
        </div>

        <div class="content">
                <h1>
               Crea un grupo y recibe dinero de forma automática cada mes.
            </h1>
            <p>
                ¿Ya tienes una cuenta? Crea un grupo con tus suscripciones existentes y recibe los pagos de todos los miembros en tu cuenta bancaria de forma automática cada mes.
            </p>

            <button class="button-blue">
            <a  href="/create-group">Crea un grupo</a></button>

        </div>
        <div class="content">
            <h1>
                Más de 30,000 personas confían en nosotros
            </h1>
            <img src="../assets/trustpilot.png" alt="Trustpilot">
        </div>
        <div class="contentCenter">
            <h1>
                Pulpo en los medios
            </h1>
            <div class="elementsCenter">
                <img src="../assets/lavanguardia.png" alt="Lavanguardia">
                <img src="../assets/elreferente.png" alt="elreferente">
                <img src="../assets/europapress.png" alt="EuropaPress">
                <img src="../assets/emprendedores.png" alt="emprendedores">
                <img src="../assets/20minutos.png" alt="20minutos">
            </div>
        </div>
        <div class="contentCenter">
            <h1>
                ¿Cómo funciona?
            </h1>
            <div class="elementsCenter">
                <div>
                    <img src="../assets/conecta.png" alt="Conecta">
                    <h2>
                        1. Conecta
                    </h2>
                    <p>Te conectamos con otros usuarios que quieran compartir la misma suscripción.</p>
                </div>
                <div>
                    <img src="../assets/comparte.png" alt="comparte">
                    <h2>
                        2. Comparte
                    </h2>
                    <p>Dividiremos el coste de la suscripción entre el grupo y solo pagarás tu parte de la cuota al administrador.</p>
                    </div>
                <div>
                    <img src="../assets/despreocupate.png" alt="despreocupate">
                    <h2>3. Despreocúpate</h2>
                    <p>Nosotros nos encargamos de automatizar los pagos entre miembros y garantizar que todo funcione a la perfección.</p>
                </div>
                
            </div>
        </div>


        <footer>
            <ul>
                <li>
                    <a style="color:white" href="#">Jobs</a>
                </li>
                <li>
                    <a style="color:white" href="#">Términos</a>
                </li>
                <li>
                    <a style="color:white" href="#">Privacidad</a>
                </li>
                <li>
                    <a style="color:white" href="#">Preguntas Frecuentes</a>
                </li>
            </ul>
            <br>
            <a style="color:white" href="mailto:hello@pulpo.club">hello@pulpo.club</a>
        </footer>
    </div>
</template>

<script>
import '../assets/main.css';
export default {
    name: 'HomePage'
}
</script>


<style>

a, footer ul li {
    text-decoration: none;
    margin: 5px;
    list-style:none;
}

main {
    padding-left:150px;
    padding-top: 80px;
    padding-bottom: 30px;
    background-image: url('../assets/FondoHome.png');
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    height: 300px;
    color:white;
    text-align: left;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 450px;
}

main h1 {
    padding-bottom:30px;
    font-size: 50px;
}


.content {
    padding-left:150px;
    padding-right:500px;
    color:rgb(53, 53, 53);
    text-align: left;
    font-family: 'Raleway', sans-serif;
    margin-bottom:130px;
}

.content h1, .contentCenter h1 {
    font-size: 35px;
}

.contentCenter {
    text-align:center;
    margin-bottom:130px;
    font-family: 'Raleway', sans-serif;
}


.elementsCenter {
    margin: 10px;
    align-items: center;
    text-align:center;
    vertical-align:top;
}

.elementsCenter img {
    max-width: 150px;
    margin: 15px;
}

.elementsCenter div {
    width: 25%;
    display:inline-block;
    margin: 15px;
}


footer {
    padding: 70px;
    background-image: url('../assets/FondoHomeFooter.png');
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    color:white;
    text-align:center;
    height: 200px;
}

footer ul {
    display:inline-flex;
}

</style>