//prévia catálogo home depois do login
document.addEventListener("DOMContentLoaded", function () {
    const catalogo_produtos = document.getElementById("catalogo_produtos");
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
        catalogo_produtos.innerHTML = "";
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
                                    <a href='detalhesProduto.html'>
                                        <button type="button">
                                            Ver mais
                                            <i class="fa-solid fa-arrow-right"></i>
                                         </button>
                                    </a>
                                </div>
                           </div>
                            `).join('')}
                    </div>
                </div>
            `;
            catalogo_produtos.appendChild(container);
        });
    }


    renderCarrossel();
});
