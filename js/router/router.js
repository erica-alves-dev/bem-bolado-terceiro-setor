import { renderizarHome } from "../pages/home.js";
import { renderizarProjetos } from "../pages/projetos.js";
import { renderizarCadastro } from "../pages/cadastro.js";
import { inicializarFormulario } from "../components/form.js";
import { atualizarNavegacao } from "../components/navigation.js";

const rotas = {
    "/": renderizarHome,
    "/projetos": renderizarProjetos,
    "/cadastro": renderizarCadastro
};

const conteudoPrincipal = document.querySelector(
    "#conteudo-principal"
);

function obterRotaAtual() {
    const caminho = window.location.pathname;

    if (caminho === "") {
        return "/";
    }

    return caminho;
}

function renderizarRota() {
    const rotaAtual = obterRotaAtual();
    const pagina = rotas[rotaAtual];

    if (!pagina) {
        renderizarPaginaNaoEncontrada();
        return;
    }

    pagina(conteudoPrincipal);

    atualizarNavegacao(rotaAtual);

    if (rotaAtual === "/cadastro") {
        inicializarFormulario();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function navegarPara(rota) {
    window.history.pushState(
        {},
        "",
        rota
    );

    renderizarRota();
}

function interceptarLinks() {
    document.addEventListener("click", (evento) => {
        const link = evento.target.closest(
            "[data-rota]"
        );

        if (!link) {
            return;
        }

        const rota = link.getAttribute(
            "data-rota"
        );

        if (!rota) {
            return;
        }

        evento.preventDefault();

        navegarPara(rota);
    });
}

function renderizarPaginaNaoEncontrada() {
    conteudoPrincipal.innerHTML = `
        <section
            class="secao secao--erro"
            aria-labelledby="titulo-erro"
        >
            <div class="container">

                <h1 id="titulo-erro">
                    Página não encontrada
                </h1>

                <p>
                    A página que você tentou acessar
                    não existe.
                </p>

                <a
                    class="botao botao--primario"
                    href="/"
                    data-rota="/"
                >
                    Voltar para o início
                </a>

            </div>
        </section>
    `;
}

export function inicializarRouter() {
    if (!conteudoPrincipal) {
        return;
    }

    interceptarLinks();

    window.addEventListener(
        "popstate",
        renderizarRota
    );

    renderizarRota();
}