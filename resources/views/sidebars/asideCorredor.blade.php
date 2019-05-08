<aside id="style-1" class="crm-option-trubilia sticky-efect">
    <ul>
        <li @click="menu=0">
            <img src="images/profile-ccrm.jpg" />
            <div><small>User ID 158756189</small>Angel Jones</div>
        </li>
        <li>
            <i class="fas fa-users"></i>CRM | LSM <i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li @click="menu=1.1">
                    <i class="fas fa-id-badge"></i> Contactos en venta 
                </li>
                <li @click="menu=1.2">
                    <i class="fas fa-clipboard-list"></i> Tareas 
                </li>
                <li @click="menu=1.3">
                    <i class="fas fa-share-alt"></i> Anuncios compartidos. 
                </li>
                <li @click="menu=1.4">
                    <i class="far fa-address-book"></i> Contactos 
                </li>
            </ul>
        </li>
        <li>
            <i class="far fa-newspaper"></i>Mis Anuncios<i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li class=' ' @click="menu=2.1">
                    <i class="fas fa-check-circle"></i> Activos <div class="badge badge-primary">5</div>
                </li>
                <li @click="menu=2.2">
                    <i class="fas fa-level-up-alt"></i> Resltado <div class="badge badge-primary">3</div>
                </li>
                <li @click="menu=2.3">
                    <i class="fas fa-times-circle"></i> Borrados <div class="badge badge-primary">1</div>
                </li>

            </ul>
        </li>
        <li>
            <i class="fas fa-inbox"></i>Mensajes<i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li class=' ' @click="menu=3.1">
                    <i class="fas fa-inbox"></i> Mensajes 
                </li>
                <li @click="menu=3.2">
                    <i class="far fa-comment-dots"></i> Chat 
                </li>
                <li @click="menu=3.3">
                    <i class="fas fa-times-circle"></i> Mensajes del sistema 
                </li>
                <li @click="menu=3.4">
                    <i class="fas fa-exclamation-triangle"></i> Configuración de alertas 
                </li>
                <li @click="menu=3.5">
                    <i class="fas fa-bell"></i> Suscripción de alertas 
                </li>
                <li @click="menu=3.6">
                    <i class="far fa-bell"></i> Notificaciones push 
                </li>

            </ul>
        </li>
        <li @click="menu=4">
            <i class="far fa-heart"></i>Favoritos<i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li class=' ' @click="menu=4.1">
                    <i class="far fa-heart"></i> Anuncios favoritos
                </li>
                <li @click="menu=4.2">
                    <i class="fas fa-search"></i> Busquedas guardadas 
                </li>
            </ul>
        </li>
        <li @click="menu=5">
            <i class="fas fa-chart-pie"></i>Estadisticas<i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li class=' ' @click="menu=5.1">
                    <i class="fas fa-address-book"></i> Contactos de venta 
                </li>
                <li @click="menu=5.2">
                    <i class="fas fa-eye"></i> Vistas al anuncio 
                </li>
            </ul>
        </li>
        <li @click="menu=6">
            <i class="far fa-user"></i>Perfil<i class="fas fa-angle-right"></i>
            <ul class='submenu'>
                <li class=' ' @click="menu=6.1">
                    <i class="fas fa-check-circle"></i> Modificar perfil 
                </li>
                <li @click="menu=6.2">
                    <i class="fas fa-level-up-alt"></i> Modificar correo 
                </li>
                <li @click="menu=6.3">
                    <i class="fas fa-times-circle"></i> Cambiar contraseña 
                <li @click="menu=6.4">
                    <i class="fas fa-times-circle"></i> Historial decreditos 
                </li>
                <li class=' ' @click="menu=6.5">
                    <i class="fas fa-check-circle"></i> Historial de pagos 
                </li>
                <li @click="menu=6.6">
                    <i class="fas fa-level-up-alt"></i> Redes sociales 
                </li>
                <li @click="menu=6.7">
                    <i class="fas fa-times-circle"></i> Valoraciones
                </li>
                <li @click="menu=6.8">
                    <i class="fas fa-times-circle"></i> Mi micrositio 
                </li>
            </ul>
        </li>
        <li @click="menu=7">
            <i class="fas fa-level-up-alt active"></i>Venda mas rapido<i class="fas fa-angle-right"></i>
        </li>
        <li @click="menu=8">
            <i class="fas fa-sign-out-alt"></i>Salir<i class="fas fa-angle-right"></i>
        </li>
    </ul>
</aside>