<template>
    <div>
        <h2 class='text-muted'>Administre sus suscripciones</h2>
        <p>
            Defina a que correos quiere enviar sus alertas. Solo puede seleccionar un correo por opción. Las alertas de nuevos contactos son enviados a los correos aquí seleccionados y definidos dentro de cada anuncio. 
        </p>
        <div class="card">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="">Enviame nuevos comentarios a:</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Notificame cuando un comentario es escrito en mi anuncio.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="">Enviar una copia de aviso de contacto para:</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Enviar una copia a este email cuando alguien escribió interesado a un anuncio
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="">Enviame alertas de anuncios expiados a:</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Notifícame cuando un anuncio expira.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="">Enviame alertas de nuevos contactos a:</label>
                        <label class="trubilia-checkbox">mailGenerico
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Notificame cuando alguien me escribe acerca del anuncio.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="">Recibir Boletines:</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                    </div>
                    <div class="form-group">
                        <label for="">Mensajes importantes del sistema</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                    </div>
                    <div class="form-group">
                        <label for="">Emails de notificaciones de resultados de búsquedas programadas</label>
                        <input type="text" class="form-control" placeholder="Correo electronico" />
                    </div>
                    <button class="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>