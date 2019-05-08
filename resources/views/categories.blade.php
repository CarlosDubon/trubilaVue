<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/all.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Trubila</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-brand">
                <a href="/">
                    <img src="/images/trubia-logo-negative.png" />
                </a>
            </div>
            <div class="navbar-search-container">
                <input class="navbar-search" />
                <i class="fas fa-search"></i>
            </div>
            <ul class="navbar-menu">
                <li><a href="/Categories">Categorias</a></li>
                <li><a href="#">Ingresar</a></li>
                <li><a href="#">Registrarse</a></li>
                <li><button class='trubilia-outerline-btn-negative'><i class="fas fa-camera"></i> Publicar</button></li>
            </ul>
        </nav>
    </header>
    <section class="container-fluid mt-50">
       <div class="row">
           <div class="col-md-3">
               <nav class='mapping-page'>
                    <ul>
                        <li>Inicio > </li>
                        <li>Propiedades > </li>
                        <li>Casas en arquiler</li>
                    </ul>
               </nav>
               <div class="search-filter mt-30">
                   Buscar propiedades para:
                   <button class='btn btn-primary btn-mini'>comprar</button>
                   <button class='btn btn-mini'>alquilar</button>
                </div>
                <div class="filter-section">
                    <div class="bulding-ubication-filter mt-30">
                        <div class="trubilia-select">
                            <select name="" id="">
                                <option value="0">Todo el pais</option>
                                <option value="1">Cercano</option>
                            </select>
                        </div>
                    </div>
                    <div class="bulding-type-filter">
                        <div class="trubilia-select">
                            <select name="" id="">
                                <option value="0">Tipo de propiedad</option>
                                <option value="1">Apartamento</option>
                                <option value="2">Edificio</option>
                            </select>
                        </div>
                    </div>
                    <div class="building-price-filter">
                        <label for="">Rango de precio</label>
                        <div class="price-range-slider">
                            <input class='min range-slider' type="range" min=0 max=15 value=7>
                            <input class='max range-slider' type="range" min=16 max=30 value=21>
                        </div>
                        
                    </div>
                </div>
           </div>
           <div class="col-md-9">
                <div class="build-card">
                    <div class="bluid-photos-card">
                        <img src=" images/house6.jpg" alt="">
                    </div>
                    <div class="bluid-details-card">
                        <i class="fas fa-fire-alt"></i>
                        <span>Casa de estudiante</span>
                        <div class="specs-card">
                            <div><small>9 m<span>2</span></small></div>
                            <div>4 <i class="fas fa-bed"></i></div>
                            <div>3 <i class="fas fa-bath"></i></div>
                        </div>
                    </div>
                    <div class="bluid-price-card">
                        <h3>$175</h3>
                    </div>
                    <div class="bluid-contact-card">
                        <span>7 mar</span>
                        <button class='trubilia-outerline-btn'>Contactar</button>
                    </div>
                </div>
                <div class="build-card">
                    <div class="bluid-photos-card">
                        <img src=" images/house7.jpg" alt="">
                    </div>
                    <div class="bluid-details-card">
                        <i class="fas fa-fire-alt"></i>
                        <span>Casa de estudiante</span>
                        <div class="specs-card">
                            <div><small>9 m<span>2</span></small></div>
                            <div>4 <i class="fas fa-bed"></i></div>
                            <div>3 <i class="fas fa-bath"></i></div>
                        </div>
                    </div>
                    <div class="bluid-price-card">
                        <h3>$175</h3>
                    </div>
                    <div class="bluid-contact-card">
                        <span>7 mar</span>
                        <button class='trubilia-outerline-btn'>Contactar</button>
                    </div>
                </div>
                <div class="build-card">
                    <div class="bluid-photos-card">
                        <img src=" images/house8.jpg" alt="">
                    </div>
                    <div class="bluid-details-card">
                        <i class="fas fa-fire-alt"></i>
                        <span>Casa de estudiante</span>
                        <div class="specs-card">
                            <div><small>9 m<span>2</span></small></div>
                            <div>4 <i class="fas fa-bed"></i></div>
                            <div>3 <i class="fas fa-bath"></i></div>
                        </div>
                    </div>
                    <div class="bluid-price-card">
                        <h3>$175</h3>
                    </div>
                    <div class="bluid-contact-card">
                        <span>7 mar</span>
                        <button class='trubilia-outerline-btn'>Contactar</button>
                    </div>
                </div>
                <div class="build-card">
                    <div class="bluid-photos-card">
                        <img src=" images/house9.jpg" alt="">
                    </div>
                    <div class="bluid-details-card">
                        <i class="fas fa-fire-alt"></i>
                        <span>Casa de estudiante</span>
                        <div class="specs-card">
                            <div><small>9 m<span>2</span></small></div>
                            <div>4 <i class="fas fa-bed"></i></div>
                            <div>3 <i class="fas fa-bath"></i></div>
                        </div>
                    </div>
                    <div class="bluid-price-card">
                        <h3>$175</h3>
                    </div>
                    <div class="bluid-contact-card">
                        <span>7 mar</span>
                        <button class='trubilia-outerline-btn'>Contactar</button>
                    </div>
                </div>
                <div class="build-card">
                    <div class="bluid-photos-card">
                        <img src=" images/house1.jpg" alt="">
                    </div>
                    <div class="bluid-details-card">
                        <i class="fas fa-fire-alt"></i>
                        <span>Casa de estudiante</span>
                        <div class="specs-card">
                            <div><small>9 m<span>2</span></small></div>
                            <div>4 <i class="fas fa-bed"></i></div>
                            <div>3 <i class="fas fa-bath"></i></div>
                        </div>
                    </div>
                    <div class="bluid-price-card">
                        <h3>$175</h3>
                    </div>
                    <div class="bluid-contact-card">
                        <span>7 mar</span>
                        <button class='trubilia-outerline-btn'>Contactar</button>
                    </div>
                </div>
           </div>
       </div>
    </section>
</body>
<script src='js/all.js'></script>
<script src='js/app.js'></script>
</html>