export function renderizarHome(container) {
    container.innerHTML = `
        <section
            class="secao secao--inicio"
            aria-labelledby="titulo-inicio"
        >
            <div class="container">
                <div class="grade grade--inicio">

                    <div class="secao__conteudo">
                        <p class="secao__categoria">
                            Associação Cristã Socioassistencial Esportiva
                        </p>

                        <h1 id="titulo-inicio">
                            Bem Bolado
                        </h1>

                        <p class="secao__descricao">
                            Transformando vidas por meio do esporte,
                            da educação e da convivência social.
                        </p>

                        <div class="acoes">
                            <a
                                class="botao botao--primario"
                                href="/projetos"
                                data-rota="/projetos"
                            >
                                Conheça nossos projetos
                            </a>

                            <a
                                class="botao botao--secundario"
                                href="/cadastro"
                                data-rota="/cadastro"
                            >
                                Quero participar
                            </a>
                        </div>
                    </div>

                    <div class="secao__imagem">
                        <img
                            src="imagens/bem-bolado-futebol.jpg"
                            alt="Atividade de futebol do projeto Bem Bolado"
                        >
                    </div>

                </div>
            </div>
        </section>

        <section
            class="secao secao--sobre"
            aria-labelledby="titulo-sobre"
        >
            <div class="container">

                <h2 id="titulo-sobre">
                    Sobre a Bem Bolado
                </h2>

                <p>
                    A Associação Cristã Sócio Assistencial Esportiva
                    Bem Bolado é uma organização social localizada
                    em Amparo, São Paulo, que desenvolve ações e
                    projetos voltados principalmente para crianças
                    e adolescentes em situação de vulnerabilidade
                    social.
                </p>

                <p>
                    A instituição utiliza o esporte, a educação,
                    a cultura e a convivência comunitária como
                    ferramentas para promover o desenvolvimento,
                    a integração social e o fortalecimento dos
                    vínculos familiares e comunitários.
                </p>

            </div>
        </section>

        <section
            class="secao secao--informacoes"
            aria-labelledby="titulo-informacoes"
        >
            <div class="container">

                <h2 id="titulo-informacoes">
                    Informações
                </h2>

                <div class="grade grade--informacoes">

                    <article class="card-informacao">
                        <h3>
                            Público atendido
                        </h3>

                        <p>
                            Crianças e adolescentes, especialmente
                            aqueles em situação de vulnerabilidade
                            social.
                        </p>
                    </article>

                    <article class="card-informacao">
                        <h3>
                            Áreas de atuação
                        </h3>

                        <p>
                            Esporte, educação, cultura, lazer,
                            convivência social e desenvolvimento
                            de crianças e adolescentes.
                        </p>
                    </article>

                    <article class="card-informacao">
                        <h3>
                            Localização
                        </h3>

                        <p>
                            Amparo, São Paulo, Brasil.
                        </p>
                    </article>

                </div>
            </div>
        </section>

        <section
            class="secao secao--comunidade"
            aria-labelledby="titulo-comunidade"
        >
            <div class="container">
                <div class="grade">

                    <div class="secao__conteudo">
                        <h2 id="titulo-comunidade">
                            Esporte e convivência
                        </h2>

                        <p>
                            O projeto utiliza atividades esportivas,
                            educativas e de convivência como
                            ferramentas para contribuir com o
                            desenvolvimento e a integração social
                            de crianças e adolescentes.
                        </p>

                        <p>
                            As ações também buscam fortalecer a
                            convivência familiar e comunitária,
                            o respeito, a cooperação e a
                            participação.
                        </p>
                    </div>

                    <div class="secao__imagem">
                        <img
                            src="imagens/bem-bolado-comunidade.jpeg"
                            alt="Participantes em atividade comunitária do Bem Bolado"
                        >
                    </div>

                </div>
            </div>
        </section>

        <section
            class="secao secao--contato"
            aria-labelledby="titulo-contato"
        >
            <div class="container">

                <h2 id="titulo-contato">
                    Contatos
                </h2>

                <address class="contato">
                    <p>
                        <strong>Telefone:</strong>
                        <a href="tel:+551996523864">
                            (19) 9 9652-3864
                        </a>
                    </p>

                    <p>
                        <strong>E-mail:</strong>
                        <a href="mailto:aetebembolado@gmail.com">
                            aetebembolado@gmail.com
                        </a>
                    </p>

                    <p>
                        <strong>Localização:</strong>
                        Amparo, São Paulo, Brasil.
                    </p>
                </address>

            </div>
        </section>

        <section
            class="secao secao--participacao"
            aria-labelledby="titulo-participacao"
        >
            <div class="container">

                <h2 id="titulo-participacao">
                    Participe
                </h2>

                <p>
                    Para demonstrar interesse em participar das
                    ações e projetos da Bem Bolado, faça seu
                    cadastro.
                </p>

                <a
                    class="botao botao--primario"
                    href="/cadastro"
                    data-rota="/cadastro"
                >
                    Fazer cadastro
                </a>

            </div>
        </section>
    `;
}