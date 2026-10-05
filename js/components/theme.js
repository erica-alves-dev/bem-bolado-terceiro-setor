import {
    obterDados,
    salvarDados
} from "../storage/storage.js";

const CHAVE_TEMA = "bem-bolado-tema";
const TEMA_PADRAO = "light";

function temaValido(tema) {
    return tema === "light" || tema === "dark";
}

function aplicarTema(tema) {
    document.documentElement.setAttribute(
        "data-theme",
        tema
    );
}

function obterTemaSalvo() {
    const temaSalvo = obterDados(
        CHAVE_TEMA,
        TEMA_PADRAO
    );

    if (!temaValido(temaSalvo)) {
        return TEMA_PADRAO;
    }

    return temaSalvo;
}

function atualizarTextoBotao(
    botao,
    tema
) {
    if (tema === "dark") {
        botao.textContent = "Modo claro";

        botao.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        return;
    }

    botao.textContent = "Modo escuro";

    botao.setAttribute(
        "aria-label",
        "Ativar modo escuro"
    );
}

export function inicializarTema() {
    const botaoTema =
        document.querySelector(
            "#botao-tema"
        );

    const temaInicial =
        obterTemaSalvo();

    aplicarTema(temaInicial);

    if (!botaoTema) {
        return;
    }

    atualizarTextoBotao(
        botaoTema,
        temaInicial
    );

    botaoTema.addEventListener(
        "click",
        () => {
            const temaAtual =
                document.documentElement
                    .getAttribute(
                        "data-theme"
                    );

            const novoTema =
                temaAtual === "dark"
                    ? "light"
                    : "dark";

            aplicarTema(novoTema);

            salvarDados(
                CHAVE_TEMA,
                novoTema
            );

            atualizarTextoBotao(
                botaoTema,
                novoTema
            );
        }
    );
}