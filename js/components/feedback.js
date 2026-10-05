export function inicializarFeedback() {
    inicializarAlertas();
    inicializarToasts();
    inicializarModais();
    inicializarBadges();
}

function inicializarAlertas() {
    const alertas = document.querySelectorAll(".alerta");

    alertas.forEach((alerta) => {
        const botaoFechar = alerta.querySelector(
            "[data-fechar-alerta]"
        );

        if (!botaoFechar) {
            return;
        }

        botaoFechar.addEventListener("click", () => {
            alerta.remove();
        });
    });
}

export function mostrarAlerta(
    mensagem,
    tipo = "info",
    container = null
) {
    const alerta = document.createElement("div");

    alerta.className = `alerta alerta--${tipo}`;
    alerta.setAttribute("role", "alert");
    alerta.textContent = mensagem;

    const destino =
        container || document.querySelector("main");

    if (destino) {
        destino.prepend(alerta);
    }

    return alerta;
}

function inicializarToasts() {
    const toasts = document.querySelectorAll(".toast");

    toasts.forEach((toast) => {
        const botaoFechar = toast.querySelector(
            "[data-fechar-toast]"
        );

        if (!botaoFechar) {
            return;
        }

        botaoFechar.addEventListener("click", () => {
            toast.remove();
        });
    });
}

export function mostrarToast(
    mensagem,
    tipo = "info"
) {
    const toast = document.createElement("div");

    toast.className = `toast toast--${tipo}`;
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent = mensagem;

    document.body.append(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);

    return toast;
}

function inicializarModais() {
    const botoesAbrir = document.querySelectorAll(
        "[data-modal-abrir]"
    );

    botoesAbrir.forEach((botao) => {
        botao.addEventListener("click", () => {
            const idModal =
                botao.getAttribute("data-modal-abrir");

            const modal =
                document.querySelector(`#${idModal}`);

            if (modal) {
                modal.removeAttribute("hidden");
            }
        });
    });

    const botoesFechar = document.querySelectorAll(
        "[data-modal-fechar]"
    );

    botoesFechar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const modal = botao.closest(".modal");

            if (modal) {
                modal.setAttribute("hidden", "");
            }
        });
    });
}

function inicializarBadges() {
    const badges = document.querySelectorAll(".badge");

    badges.forEach((badge) => {
        badge.setAttribute(
            "aria-label",
            `Categoria: ${badge.textContent.trim()}`
        );
    });
}