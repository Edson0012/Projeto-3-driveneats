let contador = 0;
let valorComida = 0;
let valorBebidas = 0;
let valorSobremesas = 0;

function comidas(food) {
    const selecionado = document.querySelector(".box-pratos .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        contador--;
    }
    if (food !== selecionado) {
        food.classList.add("selecionado");
        contador++;
    }
    const valor = food.querySelector(".valor h3 span");
    valorComida = Number(valor.innerHTML.replace(",", "."));

    pedido();
}

function bebidas(liquido) {
    const selecionado = document.querySelector(
        ".box-bebidas .selecionado-bebidas"
    );

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado-bebidas");
        contador--;
    }
    if (liquido !== selecionado) {
        liquido.classList.add("selecionado-bebidas");
        contador++;
    }
    const valor = liquido.querySelector(".valor h3 span");
    valorBebidas = Number(valor.innerHTML.replace(",", "."));
    pedido();
}

function sobremesas(docinho) {
    const selecionado = document.querySelector(
        ".box-sobremesa .selecionado-sobremesas"
    );

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado-sobremesas");
        contador--;
    }
    if (docinho !== selecionado) {
        docinho.classList.add("selecionado-sobremesas");
        contador++;
    }
    const valor = docinho.querySelector(".valor h3 span");
    valorSobremesas = Number(valor.innerHTML.replace(",", "."));

    pedido();
}

function pedido() {
    const confirmar = document.querySelector(".painel");
    const paragrafo = document.querySelector(".p-footer");

    if (contador === 3) {
        confirmar.classList.add("fundo-footer");
        paragrafo.innerHTML = "Fecha pedido";

        return true;
    } else {
        confirmar.classList.remove("fundo-footer");
        paragrafo.innerHTML =
            "Selecione os 3 itens <br /> para fechar o pedido";
    }
}

function whatsapp() {
    if (pedido()) {
        const valorTotal = valorComida + valorBebidas + valorSobremesas;
        const mensagem = `Olá, gostaria de fazer o pedido:\n\- Prato: Frango Yin Yang\n\- Bebida: Coquinha Gelada\n\- Sobremesa: Pudim\n\ Total: R$${valorTotal} `;
        const URL = "https://wa.me/5581995442300?text=";
        const encode = encodeURIComponent(mensagem);

        window.open(URL + encode, "_blank");
    }
}
