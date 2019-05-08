<template>
    <div>
        <div class="float-button" data-toggle="modal" data-target="#DefaultModal">
            <i v-bind:class="['fas',iconClass]"></i>
        </div>
        <div class="modal fade" id="DefaultModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" v-text="modalTitle"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!--TEMPORAL CAMBIAR POR FORMULARIO DINAMIC-->
                     <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Telefono">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Movil">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" placeholder="comentarios"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="date" class="form-control" placeholder="Movil">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" placeholder="Comentarios"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props:[
            'formName',
            'modalTitle',
            'iconClass'
        ]
    }
</script>

<style lang="scss" scoped>

</style>