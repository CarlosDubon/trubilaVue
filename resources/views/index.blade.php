<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href=" css/all.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Trubilia</title>
</head>

<body>
    <div id="app">
        <header id='principal-header'>
            <div class="menu-container">
                <div class="brand">
                    <img src=" images/trubilia_logo.png" />
                </div>
                <nav>
                    <ul>
                        <li><a href="/Categories">Categorias</a></li>
                        <li><a href="#">Ingresar</a></li>
                        <li><a href="#">Registrarse</a></li>
                        <li><button class='trubilia-outerline-btn'><i class="fas fa-camera"></i> Publicar</button></li>
                    </ul>
                </nav>
            </div>
            <div class="search-container">
                <form>
                    <div class="form-group">
                        <div class="input-append">
                            <input type="text" class="principal-search" placeholder="Search" /><i class="fas fa-search"></i>
                        </div>
                    </div>
                </form>
            </div>
        </header>
        <section class="container-fluid">
            <div class="trubilia-destacados d-flex align-items-baseline">
                <h2>
                    Inmuebles destacados
                </h2>
                <a href="#" class='trubilia-link ml-15'>ver más en venta</a>
            </div>
            <section class="trubilia-destacados">
                <div class="destacados-slider">
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>
                    <div class="slider-card">
                        <div class='sale-add-container'>
                            <img src=" images/house1.jpg" />
                        </div>
                        <div class="sale-details-container">
                            <div class='d-flex justify-content-center'>
                                <a href="/Post/75815" class='sale-add'>En venta</a>
                            </div>
                            <h2>
                                $170,000
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s
                            </p>
                            <h4>
                                San Salvador
                            </h4>
                        </div>
                        <div class="iteration-container">
                            <div class="favs-counter">
                                <i class="far fa-heart"></i> 15 Likes
                            </div>
                            <div class="favs-counter">
                                <i class="far fa-comment"></i> 7 Comments
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section class='trubilia-beneficios'>
                <div class="trubilia-beneficio">
                    <i class="fas fa-building"></i>
                    <div class="beneficio-detail">
                        <h3>
                            Variedad de propiedades
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
                <div class="trubilia-beneficio">
                    <i class="fas fa-map-signs"></i>
                    <div class="beneficio-detail">
                        <h3>
                            Buscas y compras.
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
                <div class="trubilia-beneficio">
                    <i class="fas fa-map-marked-alt"></i>
                    <div class="beneficio-detail">
                        <h3>
                            Ubicación en tiempo real.
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    </div>
</body>
<script src=" js/all.js"></script>
<script src=" js/app.js"></script>
<script>
    $('.destacados-slider').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        slidesToShow: 5,
        dots: true,
        centerMode: true,
        prevArrow: "<button class='slick-tprev'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='slick-tnext'><i class='fas fa-angle-right'></i></button>",
        autoplay: true,
        autoplaySpeed: 1500,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
</script>

</html>