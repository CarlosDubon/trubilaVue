<template>
    <div>
        <h2 class='text-muted' v-text="title"></h2>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="images/house6.jpg" alt="">
                        </div>
                        <div class="col-md-4">
                            <p>
                                Anuncio: CASA EN VENTA EN CUMBRES DE LAS ESMERALDAS 
                            </p>
                            <div>
                                <span class="text-upgrated">$395,000.00</span>   <span>ID: 13992129</span>
                            </div>
                            <div class='d-flex flex-column mt-10 text-muted'>
                                <span><i class="fas fa-home"></i> Casas</span>
                                <span><i class="fas fa-location-arrow"></i> Zaragoza</span>
                                <span><i class="far fa-square"></i> 500 m2</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <p>Información del anunciante </p>
                            <span class='text-muted'>No introducida</span>- <span class='text-upgrated' style="cursor:pointer">Editar</span>
                        </div>
                        <div class="col-md-3">
                            <div class='cita-container'>
                                <span><i class="far fa-calendar-plus"></i> <a href='#' class="text-upgrated">Nueva tarea / cita</a></span><span class="badge badge-primary" >0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-envelope" style='font-size:110%;'></i>
                    </div>
                    <div class="col-md-3 d-flex flex-column">
                        <small><i class="far fa-clock"></i> 8 de marzo de 2019 11:58</small>
                        <span> <b>JONATHAN PERDONO</b> </span>
                        <span><i class="fas fa-phone"></i> <a href="#" class="text-upgrated">7777 - 7777</a> </span>
                        <span><i class="fas fa-envelope"></i> <a href="#" class="text-upgrated">correo@generico.com</a> </span>
                    </div>
                    <div class='col-md-2'>
                        <em>
                            <i class="fas fa-quote-left"></i> Trubila - Interesado en anuncio n° 13992129 
                        </em>
                    </div>
                    <div class="col-md-3">
                        <div>
                            <small class="text-muted"><i class="fas fa-inbox"></i> No hay comentarios aun</small>
                        </div>
                        <a href="#" class="text-upgrated">Agregar</a> 
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                             <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                                <option>Contacto Establecido</option>
                                <option>Info enviada</option>
                                <option>Cita establecida</option>
                                <option>Enviar mas ofertas</option>
                                <option>Buscar mas propiedades</option>
                                <option>Negociacion</option>
                                <option>Perdido</option>
                                <option>Ganado</option>
                            </select>
                        </div>
                        <div class='cita-container unset-background'>
                            <span><i class="far fa-calendar-plus"></i> <a href='#' class="text-upgrated">Nueva tarea / cita</a></span><span class="badge badge-primary">0</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'title'
        ]
    }
</script>

<style lang="scss" scoped>

</style>