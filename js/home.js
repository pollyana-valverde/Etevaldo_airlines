// document.addEventListener("DOMContentLoaded", function () {
//     const home_catalogo_container = document.getElementById("home_catalogo_container");
//     const itensFiltrados = [
//         {
//             geralCategoria: "Categoria 1",
//             produtos: [
//                 {
//                     img : 'place1.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//                 {
//                     img : 'place2.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//                 {
//                     img : 'place3.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//                 {
//                     img : 'place1.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//                 {
//                     img : 'place2.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//                 {
//                     img : 'place3.avif',
//                     nome : 'The night of course Residence Lembarg',
//                     rating: '5.0',
//                     location: 'Brasil',
//                     dataTime: 'Jul 2-7',
//                     price: '140'
//                 },
//             ]
//         },

//     ];

//     function renderCarrossel() {
//         home_catalogo_container.innerHTML = "";
//         itensFiltrados.forEach((categoria, index) => {
//             const container = document.createElement("div");
//             container.innerHTML = `
//                 <div class="catalogoCategory">
//                     <p>${categoria.geralCategoria}</p>
//                 </div>
//                 <div class="catalogoProdutos_container">

//                     <div class="catalogoProdutos_content">
//                         ${categoria.produtos.map(produto => `
//                            <div class="produtos_corpo">
//                                     <img src="imagens/${produto.img}" 
//                                          alt="Banner ${Math.ceil((index + 1) / 3)}" 
//                                     />
//                                      <h4>${produto.nome}</h4>
//                                 <div class="produtos_detalhes">
//                                    <div class="detalhe">
//                                         <i class="fa-regular fa-star"></i>
//                                         <p>${produto.rating} Avaliação</p>
//                                    </div>
//                                    <div class="detalhe">
//                                         <i class="fa-solid fa-location-arrow"></i>
//                                         <p>${produto.location}</p>
//                                    </div>
//                                    <div class="detalhe">
//                                        <i class="fa-solid fa-calendar-days"></i>
//                                         <p>${produto.dataTime}</p>
//                                    </div>
//                                 </div>
//                                 <div class="produtos_footer">
//                                     <div class="produtos_price">
//                                         <h4>R$${produto.price}<span>/Night</span></h4>
//                                         <p>Incluso todas as taxas</p>
//                                     </div>
//                                     <a href='detalheProduto.html'>
//                                         <button type="button">
//                                             Ver mais
//                                             <i class="fa-solid fa-arrow-right"></i>
//                                          </button>
//                                     </a>
//                                 </div>
//                            </div>
//                             `).join('')}
//                     </div>
//                     <div class="buttons_catalogo">
//                         <button class="scroll-button left" onclick="scrollTabs(this, 'left')">&#9664;</button>
//                         <button class="scroll-button right" onclick="scrollTabs(this, 'right')">&#9654;</button>
//                     </div>
//                 </div>
//             `;
//             home_catalogo_container.appendChild(container);
//         });
//     }

//     window.scrollTabs = function (button, direction) {
//         const container = button.parentElement.querySelector(".catalogoProdutos_content");
//         const scrollAmount = 700;
//         container.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth',
//         });
//     };

//     renderCarrossel();
// });

document.addEventListener("DOMContentLoaded", function () {
    const tagMediumHome = document.getElementById("home_catalogo_container");
    const itensFiltrados = [
        {
            geralCategoria: "Categoria 1",
            produtos: [
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
                {
                    img: 'place1.avif',
                    nome: 'The night of course Residence Lembarg',
                    rating: '5.0',
                    location: 'Brasil',
                    dataTime: 'Jul 2-7',
                    price: '140'
                },
            ]
        },
    ];

    function renderCarrossel() {
        tagMediumHome.innerHTML = "";
        itensFiltrados.forEach((categoria, index) => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="catalogoCategory">
                    <p>${categoria.geralCategoria}</p>
                </div>
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
                        <button class="scroll-button left" onclick="scrollTabs(this, 'left')">&#9664;</button>
                        <button class="scroll-button right" onclick="scrollTabs(this, 'right')">&#9654;</button>
                    </div>
                </div>
            `;
            tagMediumHome.appendChild(container);
        });
    }

    const leftBtn = document.querySelector(".scroll-button.left");
            const rightBtn = document.querySelector(".scroll-button.right");
            const scrollContainer = document.querySelector(".catalogoProdutos_content");

            leftBtn.addEventListener("click", () => {
                scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
            });

            rightBtn.addEventListener("click", () => {
                scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
            });
};


    renderCarrossel();
});
