function salvarDados(chave, dados) {
    localStorage.setItem(
        chave,
        JSON.stringify(dados)
    );
}

function obterDados(chave, valorPadrao = null) {
    const dadosSalvos = localStorage.getItem(chave);

    if (!dadosSalvos) {
        return valorPadrao;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        console.error(
            "Erro ao ler dados do localStorage:",
            erro
        );

        return valorPadrao;
    }
}

function removerDados(chave) {
    localStorage.removeItem(chave);
}

export {
    salvarDados,
    obterDados,
    removerDados
};