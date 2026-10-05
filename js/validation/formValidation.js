function validarCampoObrigatorio(valor) {
    return valor.trim() !== "";
}

function validarEmail(email) {
    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return formatoEmail.test(email);
}

function validarTelefone(telefone) {
    const numeros = telefone.replace(/\D/g, "");

    return numeros.length >= 10 &&
        numeros.length <= 11;
}

function validarCPF(cpf) {
    const numeros = cpf.replace(/\D/g, "");

    return numeros.length === 11;
}

function validarCEP(cep) {
    const numeros = cep.replace(/\D/g, "");

    return numeros.length === 8;
}

function validarIdade(idade) {
    const valor = Number(idade);

    return Number.isInteger(valor) &&
        valor >= 6 &&
        valor <= 17;
}

export function validarFormulario(dados) {
    const erros = {};

    if (!validarCampoObrigatorio(dados.nome)) {
        erros.nome = "Informe o nome.";
    }

    if (!validarEmail(dados.email)) {
        erros.email = "Informe um e-mail válido.";
    }

    if (!validarTelefone(dados.telefone)) {
        erros.telefone = "Informe um telefone válido.";
    }

    if (!validarCPF(dados.cpf)) {
        erros.cpf = "Informe um CPF válido.";
    }

    if (!validarCEP(dados.cep)) {
        erros.cep = "Informe um CEP válido.";
    }

    if (!validarIdade(dados.idade)) {
        erros.idade =
            "A idade deve estar entre 6 e 17 anos.";
    }

    return {
        valido: Object.keys(erros).length === 0,
        erros
    };
}