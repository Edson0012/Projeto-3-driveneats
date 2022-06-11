let contador = 0;

function comidas(food) {
    const selecionado = document.querySelector(".box-pratos .selecionado");
    if (selecionado) {
        selecionado.classList.remove("selecionado");
        contador--;
    }
    if (food !== selecionado) {
        food.classList.add("selecionado");
        contador++;
    }
    pedido();
}

function bebidas(liquido) {
    const selecionado = document.querySelector(
        ".box-bebidas .selecionado-bebidas"
    );
    if (selecionado) {
        selecionado.classList.remove("selecionado-bebidas");
        contador--;
    }
    if (liquido !== selecionado) {
        liquido.classList.add("selecionado-bebidas");
        contador++;
    }

    pedido();
}

function sobremesas(docinho) {
    const selecionado = document.querySelector(
        ".box-sobremesa .selecionado-sobremesas"
    );
    if (selecionado) {
        selecionado.classList.remove("selecionado-sobremesas");
        contador--;
    }
    if (docinho !== selecionado) {
        docinho.classList.add("selecionado-sobremesas");
        contador++;
    }
    pedido();
}

function pedido() {
    const confirmar = document.querySelector(".painel");
    const paragrafo = document.querySelector(".p-footer");
    if (contador === 3) {
        confirmar.classList.add("fundo-footer");
        paragrafo.innerHTML = "Fecha pedido";
    } else {
        confirmar.classList.remove("fundo-footer");
        paragrafo.innerHTML =
            "Selecione os 3 itens <br /> para fechar o pedido";
    }
    console.log(contador);
}
