export function criarTemplateProjeto(projeto) {
    return `
        <article class="card-projeto">
            <div class="card-projeto__conteudo">
                <h2>${projeto.titulo}</h2>

                <p>
                    ${projeto.descricao}
                </p>

                <span class="badge">
                    ${projeto.categoria}
                </span>
            </div>
        </article>
    `;
}

export function criarTemplateMensagem(
    mensagem,
    tipo = "info"
) {
    return `
        <div
            class="alerta alerta--${tipo}"
            role="alert"
        >
            ${mensagem}
        </div>
    `;
}

export function criarTemplateErroCampo(mensagem) {
    return `
        <span class="campo__erro" role="alert">
            ${mensagem}
        </span>
    `;
}