export function atualizarNavegacao(rotaAtual) {
    const links = document.querySelectorAll(
        "[data-rota]"
    );

    links.forEach((link) => {
        const rota =
            link.getAttribute("data-rota");

        if (rota === rotaAtual) {
            link.setAttribute(
                "aria-current",
                "page"
            );

            return;
        }

        link.removeAttribute(
            "aria-current"
        );
    });
}