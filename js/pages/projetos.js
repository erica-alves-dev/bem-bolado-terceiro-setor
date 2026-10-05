import { criarTemplateProjeto } from "../templates/templates.js";

const projetos = [
    {
        titulo: "Escolinha de Futebol Bem Bolado",
        categoria: "Esporte",
        descricao:
            "O projeto desenvolve atividades de futebol, futsal e outras ações esportivas voltadas para crianças e adolescentes. Busca contribuir para o desenvolvimento, a convivência social, a cooperação e o fortalecimento dos vínculos familiares e comunitários."
    },
    {
        titulo: "Fazendo a Diferença Planalto da Serra",
        categoria: "Convivência",
        descricao:
            "O projeto desenvolve atividades voltadas para crianças e adolescentes, utilizando o esporte, a convivência e ações educativas como ferramentas para contribuir com o desenvolvimento social e o fortalecimento dos vínculos familiares e comunitários."
    },
    {
        titulo: "Entender Para Atender",
        categoria: "Assistência social",
        descricao:
            "O projeto desenvolve ações de acompanhamento e apoio às famílias, buscando compreender suas necessidades e contribuir para o fortalecimento da convivência familiar e comunitária e para o acesso a direitos."
    }
];

export function renderizarProjetos(container) {
    const listaProjetos = projetos
        .map((projeto) => criarTemplateProjeto(projeto))
        .join("");

    container.innerHTML = `
        <section
            class="secao secao--projetos"
            aria-labelledby="titulo-projetos"
        >
            <div class="container">

                <p class="secao__categoria">
                    Nossas ações
                </p>

                <h1 id="titulo-projetos">
                    Projetos
                </h1>

                <p class="secao__descricao">
                    Conheça alguns dos projetos e ações desenvolvidos
                    pela Bem Bolado.
                </p>

                <div class="grade grade--projetos">
                    ${listaProjetos}
                </div>

            </div>
        </section>
    `;
}