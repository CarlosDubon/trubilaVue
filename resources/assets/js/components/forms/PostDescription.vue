<template>
    <div class="add-publication-section card">
        <div>
            <div class="row">
                <div class="col-lg-8">
                    <h3 class='primary-color'>
                        3. Descripción
                    </h3>
                    <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Titulo">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Escriba una descripcion" class="form-control"></textarea>
                        </div>
                        <hr>
                        <h4>Detalles</h4>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Precio">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option value="0">Recamaras</option>
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Baños</option>
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Parking</option>
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Campo con opcion">
                                        <span class='input-group-btn'>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option value="0">m2</option>
                                                <option value="1">v2</option>
                                            </select>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="main-pic-add file-uploader">
                        <i class="fas fa-camera"></i>
                        <h3>Agregar imagenes</h3>
                        <input class="file-upload" type="file" accept="image/*" />
                    </div>
                    <div class="row mt-30 picks-container-add">
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pic-container-add file-uploader">
                                <i class="fas fa-camera"></i>
                                <input class="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group d-flex align-items-end">
                <button class="btn btn-primary">Guardar</button>
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