import { inicializarMenu } from "./components/menu.js";
import { inicializarTema } from "./components/theme.js";
import { inicializarFeedback } from "./components/feedback.js";
import { inicializarRouter } from "./router/router.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    inicializarTema();
    inicializarFeedback();
    inicializarRouter();
});