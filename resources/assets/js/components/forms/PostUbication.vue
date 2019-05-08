<template>
    <div class="add-publication-section card">
        <div>
            <h3 class='primary-color'>
                2. Ubicación
            </h3>
            <form action="#">
                <div class="form-group">
                    <input class='form-control' type="text" placeholder="Donde esta ubicado?">
                </div>
            </form>
            <div class="select-category-section">
                <div id='style-1' class="category-select">
                    <ul>
                        <li><i class="far fa-bookmark"></i>Ubicación 1 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 2 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 3 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 4 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 5 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 6 ></li>
                        <li><i class="far fa-bookmark"></i>Ubicación 7 ></li>
                    </ul>
                </div>
                <div id='style-1' class="category-select">
                    <ul>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 1 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 2 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 3 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 4 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 5 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 6 ></li>
                        <li><i class="far fa-bookmark"></i>Sub Ubicación 7 ></li>
                    </ul>
                </div>
            </div>
            <div class='mt-50'>
                <div style="width: 100%"><iframe width="100%" height="600"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a
                            href="https://www.maps.ie/map-my-route/">Map a route</a></iframe></div><br />
            </div>
            <div class='d-flex justify-content-end'>
                <button class="btn btn-primary">Seleccionar</button>
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