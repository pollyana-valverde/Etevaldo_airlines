// faq end home
document.addEventListener("DOMContentLoaded", function () {
    const faqs = [
        {
            header: "Pergunta grande 1?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 2?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 3?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 4?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 4?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        }
    ];

    const faqList = document.getElementById("faq-list");

    faqs.forEach((faq, index) => {
        const item = document.createElement("div");
        item.classList.add("faq-item");

        const header = document.createElement("button");
        header.classList.add("faq-header");
        header.innerText = faq.header;
        header.setAttribute("data-index", index);

        const body = document.createElement("div");
        body.classList.add("faq-body");
        body.innerText = faq.resposta;
        body.style.display = "none";

         // Define o primeiro item como ativo por padrão
         if (index === 0) {
            header.classList.add("collapsed");
            body.style.display = "block";
        } else {
            body.style.display = "none";
        }

        // Adiciona evento de clique para abrir/fechar a pergunta e aplicar classe ativa
        header.addEventListener("click", function () {
            // Remove classe ativa de todas as perguntas
            document.querySelectorAll(".faq-header").forEach(btn => btn.classList.remove("collapsed"));
            document.querySelectorAll(".faq-body").forEach(b => b.style.display = "none");

            // Adiciona classe ativa apenas ao item clicado
            header.classList.add("collapsed");
            body.style.display = "block";
        });

        item.appendChild(header);
        item.appendChild(body);
        faqList.appendChild(item);
    });
});