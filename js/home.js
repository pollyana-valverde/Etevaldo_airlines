//prévia catálogo home depois do login
document.addEventListener("DOMContentLoaded", function () {
    const home_catalogo_container = document.getElementById("home_catalogo_container");
    const itensFiltrados = [
        {
            produtos: [
                {
                    img : 'place1.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img : 'place2.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img : 'place3.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img : 'place1.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img : 'place2.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img : 'place3.avif',
                    nome : 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
            ]
        },

    ];

    function renderCarrossel() {
        home_catalogo_container.innerHTML = "";
        itensFiltrados.forEach((categoria, index) => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="catalogoProdutos_container">

                    <div class="catalogoProdutos_content">
                        ${categoria.produtos.map(produto => `
                           <div class="produtos_corpo">
                                    <img src="imagens/${produto.img}" 
                                         alt="Banner ${Math.ceil((index + 1) / 3)}" 
                                    />
                                     <h4>${produto.nome}</h4>
                                <div class="produtos_detalhes">
                                   <div class="detalhe">
                                        <i class="fa-regular fa-star"></i>
                                        <p>${produto.rating} Avaliação</p>
                                   </div>
                                   <div class="detalhe">
                                        <i class="fa-solid fa-location-arrow"></i>
                                        <p>${produto.location}</p>
                                   </div>
                                   <div class="detalhe">
                                       <i class="fa-solid fa-calendar-days"></i>
                                        <p>${produto.dataTime}</p>
                                   </div>
                                </div>
                                <div class="produtos_footer">
                                    <div class="produtos_price">
                                        <h4>R$${produto.price}<span>/Night</span></h4>
                                        <p>Incluso todas as taxas</p>
                                    </div>
                                    <a href='detalheProduto.html'>
                                        <button type="button">
                                            Ver mais
                                            <i class="fa-solid fa-arrow-right"></i>
                                         </button>
                                    </a>
                                </div>
                           </div>
                            `).join('')}
                    </div>
                    <div class="buttons_catalogo">
                        <button class="scroll-button left" onclick="scrollTabs(this, 'left')"><</button>
                        <button class="scroll-button right" onclick="scrollTabs(this, 'right')">></button>
                    </div>
                </div>
            `;
            home_catalogo_container.appendChild(container);
        });
    }

    window.scrollTabs = function (button, direction) {
        const container = button.closest('.catalogoProdutos_container').querySelector('.catalogoProdutos_content');
        const scrollAmount = 700;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    renderCarrossel();
});


//container de ofertas
document.addEventListener("DOMContentLoaded", function () {
    const home_offer_container = document.getElementById("home_offer_container");
    const itensFiltrados = [
        {
            Offer: [
                {
                    img : 'place1.avif',
                    nome : 'The night of course Residence Lembarg',
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellat, asperiores fugit totam nesciunt ea harum alias molestias. Tempora nemo libero dicta quae animi dolorum asperiores ratione nulla repudiandae itaque.'
                },
                {
                    img : 'place1.avif',
                    nome : 'The night of course Residence Lembarg',
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellat, asperiores fugit totam nesciunt ea harum alias molestias. Tempora nemo libero dicta quae animi dolorum asperiores ratione nulla repudiandae itaque.'
                },
                {
                    img : 'place1.avif',
                    nome : 'The night of course Residence Lembarg',
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellat, asperiores fugit totam nesciunt ea harum alias molestias. Tempora nemo libero dicta quae animi dolorum asperiores ratione nulla repudiandae itaque.'
                },
            ]
        },

    ];

    function renderCarrossel() {
        home_offer_container.innerHTML = "";
        itensFiltrados.forEach((categoria, index) => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="catalogoOffer_container">
                    <div class="home_offer">
                        <h1 class="home_offer_title">Ofertas da semana</h1>
                        <div class="buttons_catalogo">
                            <button class="scroll-button left" onclick="scrollTabs(this, 'left')"><</button>
                            <button class="scroll-button right" onclick="scrollTabs(this, 'right')">></button>
                        </div>
                    </div>
                    <div class="catalogoOffer_content">
                        ${categoria.Offer.map(produto => `
                           <div class="Offer_corpo">
                                <img src="imagens/${produto.img}" 
                                         alt="Banner ${Math.ceil((index + 1) / 3)}" 
                                />
                                <div class="Offer_detalhes">
                                    <h1>${produto.nome}</h1>
                                    <p>${produto.desc}</p>
                                    <a href="#">
                                        <button type="button">Ver oferta</button>
                                    </a>
                                </div>
                           </div>
                            `).join('')}
                    </div>
                    
                </div>
            `;
            home_offer_container.appendChild(container);
        });
    }

    window.scrollTabs = function (button, direction) {
        const container = button.closest('.catalogoOffer_container').querySelector('.catalogoOffer_content');
        const scrollAmount = 700;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    renderCarrossel();
});


//container de categorias
document.addEventListener("DOMContentLoaded", function () {
    const home_categ_container = document.getElementById("home_categ_container");
    const itensFiltrados = [
        {
            Categ: [
                {
                    img : 'place1.avif',
                    nome : 'Top World',
                },
                {
                    img : 'place2.avif',
                    nome : 'Família',
                },
                {
                    img : 'place3.avif',
                    nome : 'Luxo',
                },
                {
                    img : 'place1.avif',
                    nome : 'Top World',
                },
                {
                    img : 'place2.avif',
                    nome : 'Família',
                },
                {
                    img : 'place3.avif',
                    nome : 'Luxo',
                },
                {
                    img : 'place1.avif',
                    nome : 'Top World',
                },
                {
                    img : 'place2.avif',
                    nome : 'Família',
                },
                {
                    img : 'place3.avif',
                    nome : 'Luxo',
                },
            ]
        },

    ];

    function renderCarrossel() {
        home_categ_container.innerHTML = "";
        itensFiltrados.forEach((categoria, index) => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="catalogoCateg_container">
                    <div class="home_Categ">
                        <h1 class="home_Categ_title">Ofertas da semana</h1>
                        <div class="buttons_catalogo">
                            <button class="scroll-button left" onclick="scrollTabs(this, 'left')"><</button>
                            <button class="scroll-button right" onclick="scrollTabs(this, 'right')">></button>
                        </div>
                    </div>
                    <div class="catalogoCateg_content">
                        ${categoria.Categ.map(produto => `
                            <div class="categ_content">
                                <img src="imagens/${produto.img}" 
                                         alt="Banner ${Math.ceil((index + 1) / 3)}" />
                                <h1>${produto.nome}</h1>
                            </div>
                        `).join('')}
                    </div>
                    
                </div>
            `;
            home_categ_container.appendChild(container);
        });
    }

    window.scrollTabs = function (button, direction) {
        const container = button.closest('.catalogoCateg_container').querySelector('.catalogoCateg_content');
        const scrollAmount = 700;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    renderCarrossel();
});
