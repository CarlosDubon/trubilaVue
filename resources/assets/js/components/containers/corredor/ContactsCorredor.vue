<template>
    <div>
        <h2 class='text-muted'>Contactos</h2>
        <div>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="https://picsum.photos/200" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-6">
                            <div class='text-muted d-flex flex-column'>
                                <h6>JONATHAN PERDOMO</h6>
                                <span><i class="far fa-envelope"></i> jperdomo@gmail.com</span>
                                <span><i class="fas fa-phone"></i> 7787-1102 </span>
                                <span><i class="far fa-clock"></i> Creado 8 de marzo de 2019 11:58</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-column">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-full btn-sm"><i class="far fa-edit"></i> Editar</button>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-full btn-sm"><i class="fas fa-trash"></i> Eliminar</button>
                                </div>
                                <div class='cita-container unset-background'>
                                    <span><a href='#' class="text-upgrated small"><i class="far fa-calendar-plus"></i> Nueva tarea / cita para este contacto</a></span><span class="badge badge-primary">0</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <IconModalTrigger icon-class='fa-plus' modal-title='Agregar Contacto' form-name='NewContactCorredor'></IconModalTrigger>
    </div>
</template>

<script>
    import IconModalTrigger from '../../buttons/IconModalTrigger.vue';
    export default {
        components:{
            IconModalTrigger,
        }
    }
</script>

<style lang="scss" scoped>

</style>