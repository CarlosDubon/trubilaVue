<template>
    <div class='crm-option-conatiner active-slide'>
        <div class="personal-details flex-row card">
            <div class="card-body">
                <div class="account-pic">
                    <img src="images/profile-ccrm.jpg" />
                </div>
                <div class="account-details">
                    <div class="account-info">
                        <h3>
                            Bienvenido Angel Jones
                        </h3>
                        <div>
                            <p><span>User ID:</span> 158756189</p>
                            <p><span>Usuario desde:</span> 2/4/2019 (Hoy)</p>
                            <p><span>E-mail:</span> AngelJones@gmail.com</p>
                        </div>
                    </div>
                    <div class="account-settings">
                        <span><i class="fas fa-user-edit"></i> Editar perfil</span>
                        <span><i class="fas fa-globe-europe"></i> Visitar mi microservicio</span>
                    </div>
                </div>
            </div>
            <div class='card-body'>
                <span>Nivel de Usuario:</span>
                <div class="progress-bar-container">
                    <div class='progress-bar'>
                        <div></div>
                    </div>
                </div>

                <p>Como mejorar mis puntos?</p>
                <p>Como ser un buen contribuyente?</p>
            </div>
        </div>
        <div class="personal-details flex-row card">
            <div class="card-body">
                <div class="account-details">
                    <div class="account-info">
                        <h5>
                            Membresías
                        </h5>
                        <div>
                            <h3 class="text-muted">No cuentas con membresias aun</h3>
                        </div>
                    </div>
                </div>
                <div class="credit-balance" style="width:35%">
                    <span>Credito virtual:</span>

                    <p><span class='text-muted'>Saldo previo:</span> $0.00</p>
                    <p><span class='text-muted'>Adquiridos</span> $500.00</p>
                    <p><span class='text-muted'>Utilizado:</span> $100.00</p>
                    <br/>
                    <p><b class='text-muted'>Disponibles:</b> $400.00</p>
                    <button class="btn btn-updated btn-full">Comprar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
