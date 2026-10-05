const botaoMenu = document.querySelector("#botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");

function fecharMenu() {
    if (!botaoMenu || !menuPrincipal) {
        return;
    }

    botaoMenu.setAttribute(
        "aria-expanded",
        "false"
    );

    botaoMenu.setAttribute(
        "aria-label",
        "Abrir menu"
    );

    menuPrincipal.classList.remove(
        "is-aberto"
    );
}

export function inicializarMenu() {
    if (!botaoMenu || !menuPrincipal) {
        return;
    }

    botaoMenu.addEventListener("click", () => {
        const menuAberto =
            botaoMenu.getAttribute(
                "aria-expanded"
            ) === "true";

        botaoMenu.setAttribute(
            "aria-expanded",
            String(!menuAberto)
        );

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto
                ? "Abrir menu"
                : "Fechar menu"
        );

        menuPrincipal.classList.toggle(
            "is-aberto",
            !menuAberto
        );
    });

    document.addEventListener("click", (evento) => {
        const clicouNoMenu =
            menuPrincipal.contains(evento.target);

        const clicouNoBotao =
            botaoMenu.contains(evento.target);

        if (
            !clicouNoMenu &&
            !clicouNoBotao
        ) {
            fecharMenu();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            fecharMenu();
        }
    });

    menuPrincipal.addEventListener("click", (evento) => {
        const link = evento.target.closest(
            "[data-rota]"
        );

        if (link) {
            fecharMenu();
        }
    });
}