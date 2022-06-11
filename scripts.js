let contador = 0;

function comidas(food) {
    const selecionado = document.querySelector(".selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        contador--;
    } else if (selecionado === null) {
        food.classList.toggle("selecionado");
    } else {
        food.classList.add("selecionado");
        contador++;
    }
    pedido();
}

function bebidas(liquido) {
    const selecionado = document.querySelector(".selecionado-bebidas");
    if (selecionado) {
        selecionado.classList.remove("selecionado-bebidas");
        contador--;
    } else {
        liquido.classList.add("selecionado-bebidas");
        contador++;
    }

    pedido();
}

function sobremesas(docinho) {
    const selecionado = document.querySelector(".selecionado-sobremesas");
    if (selecionado) {
        selecionado.classList.remove("selecionado-sobremesas");
        contador--;
    } else if (selecionado === null) {
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
