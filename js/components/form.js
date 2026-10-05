import { validarFormulario } from "../validation/formValidation.js";
import {
    salvarDados,
    obterDados
} from "../storage/storage.js";
import { mostrarAlerta } from "./feedback.js";

const CHAVE_CADASTROS = "bem-bolado-cadastros";

export function inicializarFormulario() {
    const formulario = document.querySelector(
        "#formulario-cadastro"
    );

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const dados = obterDadosFormulario(formulario);
        const resultado = validarFormulario(dados);

        limparErros(formulario);

        if (!resultado.valido) {
            mostrarErros(
                formulario,
                resultado.erros
            );

            return;
        }

        salvarCadastro(dados);

        formulario.reset();

        mostrarAlerta(
            "Cadastro enviado com sucesso!",
            "sucesso",
            formulario
        );
    });
}

function obterDadosFormulario(formulario) {
    const dadosFormulario = new FormData(formulario);

    return {
        nome: dadosFormulario.get("nome")?.trim() || "",
        cpf: dadosFormulario.get("cpf")?.trim() || "",
        idade: dadosFormulario.get("idade")?.trim() || "",
        email: dadosFormulario.get("email")?.trim() || "",
        telefone:
            dadosFormulario.get("telefone")?.trim() || "",
        cep: dadosFormulario.get("cep")?.trim() || ""
    };
}

function salvarCadastro(dados) {
    const cadastros = obterDados(
        CHAVE_CADASTROS,
        []
    );

    cadastros.push({
        ...dados,
        dataCadastro: new Date().toISOString()
    });

    salvarDados(
        CHAVE_CADASTROS,
        cadastros
    );
}

function mostrarErros(formulario, erros) {
    Object.entries(erros).forEach(
        ([campo, mensagem]) => {
            const input =
                formulario.elements[campo];

            if (!input) {
                return;
            }

            input.setAttribute(
                "aria-invalid",
                "true"
            );

            input.classList.add("campo--erro");

            const mensagemErro =
                document.createElement("span");

            mensagemErro.className =
                "campo__erro";

            mensagemErro.setAttribute(
                "role",
                "alert"
            );

            mensagemErro.textContent = mensagem;

            input.parentElement.append(
                mensagemErro
            );
        }
    );
}

function limparErros(formulario) {
    const camposComErro =
        formulario.querySelectorAll(
            ".campo--erro"
        );

    camposComErro.forEach((campo) => {
        campo.classList.remove(
            "campo--erro"
        );

        campo.removeAttribute(
            "aria-invalid"
        );
    });

    const mensagens =
        formulario.querySelectorAll(
            ".campo__erro"
        );

    mensagens.forEach((mensagem) => {
        mensagem.remove();
    });
}