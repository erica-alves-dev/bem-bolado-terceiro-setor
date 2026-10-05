export function renderizarCadastro(container) {
    container.innerHTML = `
        <section
            class="secao secao--cadastro"
            aria-labelledby="titulo-cadastro"
        >
            <div class="container">

                <p class="secao__categoria">
                    Participação
                </p>

                <h1 id="titulo-cadastro">
                    Cadastro
                </h1>

                <p class="secao__descricao">
                    Preencha os dados abaixo para demonstrar interesse
                    em participar das ações e projetos da Bem Bolado.
                </p>

                <form
                    class="formulario"
                    id="formulario-cadastro"
                >

                    <fieldset class="formulario__grupo">
                        <legend>
                            Dados pessoais
                        </legend>

                        <div class="campo">
                            <label for="nome">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                autocomplete="name"
                                minlength="3"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="cpf">
                                CPF
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                inputmode="numeric"
                                autocomplete="off"
                                maxlength="14"
                                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                                placeholder="000.000.000-00"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="idade">
                                Idade
                            </label>

                            <input
                                type="number"
                                id="idade"
                                name="idade"
                                min="6"
                                max="17"
                                required
                            >
                        </div>
                    </fieldset>

                    <fieldset class="formulario__grupo">
                        <legend>
                            Contato
                        </legend>

                        <div class="campo">
                            <label for="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                autocomplete="email"
                                placeholder="exemplo@email.com"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="telefone">
                                Telefone
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                autocomplete="tel"
                                inputmode="tel"
                                maxlength="15"
                                pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                                placeholder="(19) 99999-9999"
                                required
                            >
                        </div>
                    </fieldset>

                    <fieldset class="formulario__grupo">
                        <legend>
                            Endereço
                        </legend>

                        <div class="campo">
                            <label for="cep">
                                CEP
                            </label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                inputmode="numeric"
                                autocomplete="postal-code"
                                maxlength="9"
                                pattern="[0-9]{5}-[0-9]{3}"
                                placeholder="00000-000"
                                required
                            >
                        </div>
                    </fieldset>

                    <div
                        class="formulario__mensagem"
                        id="mensagem-formulario"
                        role="status"
                        aria-live="polite"
                    ></div>

                    <button
                        class="botao botao--primario"
                        type="submit"
                    >
                        Enviar cadastro
                    </button>

                </form>

            </div>
        </section>
    `;
}
