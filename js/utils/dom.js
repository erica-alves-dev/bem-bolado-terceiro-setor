export function selecionar(seletor, elemento = document) {
    return elemento.querySelector(seletor);
}

export function selecionarTodos(
    seletor,
    elemento = document
) {
    return elemento.querySelectorAll(seletor);
}

export function criarElemento(
    tipo,
    classes = []
) {
    const elemento = document.createElement(tipo);

    classes.forEach((classe) => {
        elemento.classList.add(classe);
    });

    return elemento;
}

export function limparElemento(elemento) {
    if (!elemento) {
        return;
    }

    elemento.replaceChildren();
}