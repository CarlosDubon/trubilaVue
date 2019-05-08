<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="  css/all.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>CRM Trubilia</title>
</head>

<body>
    <div id="app">
        <nav id='limit-sticky' class='navbar justify-content-between'>
            <div class="brand d-flex align-items-center">
                <i class="fas fa-bars"></i>
                <img src="  images/trubia-logo-negative.png" />
            </div>
            <ul class="navbar-menu justify-content-end mr-25 align-items-center">
                <li>
                    <i class="far fa-user"></i>
                    <a href="#">Perfil</a>
                </li>
                <li>
                    <i class="far fa-compass"></i>
                    <a href="#">Ubicación</a>
                </li>
                <li>
                    <i class="far fa-money-bill-alt"></i>
                    <a href="#">$100 creditos.</a>
                </li>
                <button @click="menu=9" class='trubilia-outerline-btn-negative'><i class="fas fa-plus"></i> Publicar Anuncio</button>
            </ul>
        </nav>

        @include('sidebars.asideCorredor')
        <div class="crm-option-slides">
            <!--Componentes que cambiaran dependiendo del seleccionado-->
            <div class='crm-option-conatiner'>
                <template v-if='menu===0'>
                    <profile-corredor></profile-corredor>
                </template>
                <template v-if='menu===1.1'>
                    <sales-contact-corredor title="Contactos de venta"></sales-contact-corredor>
                </template>
                <template v-if='menu===1.2'>
                    <tasks-corredor></tasks-corredor>
                </template>
                <template v-if='menu===1.4'>
                    <contacts-corredor></contacts-corredor>
                </template>
                <template v-if='menu===2.1'>
                    <post-corredor-card></post-corredor-card>
                </template>
                <template v-if='menu===3.1'>
                    <messages-corredor></messages-corredor>
                </template>
                <template v-if='menu===3.2'>
                    <chat-corredor></chat-corredor>
                </template>
                <template v-if='menu===3.3'>
                    <system-messages-corredor></system-messages-corredor>
                </template>
                <template v-if='menu===3.4'>
                    <alert-configuration-corredor></alert-configuration-corredor>
                </template>
                <template v-if='menu===3.5'>
                    <subcription-conf-corredor></subcription-conf-corredor>
                </template>
                <template v-if='menu===9'>
                    <new-post></new-post>
                </template>
            </div>
        </div>
    </div>
</body>
<script src='js/all.js'></script>
<script src='js/app.js'></script>
</html>