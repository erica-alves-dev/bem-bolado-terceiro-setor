var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(){i&&a&&(i.setAttribute(`aria-expanded`,`false`),i.setAttribute(`aria-label`,`Abrir menu`),a.classList.remove(`is-aberto`))}function r(){i&&a&&(i.addEventListener(`click`,()=>{let e=i.getAttribute(`aria-expanded`)===`true`;i.setAttribute(`aria-expanded`,String(!e)),i.setAttribute(`aria-label`,e?`Abrir menu`:`Fechar menu`),a.classList.toggle(`is-aberto`,!e)}),document.addEventListener(`click`,e=>{let t=a.contains(e.target),r=i.contains(e.target);!t&&!r&&n()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()}),a.addEventListener(`click`,e=>{e.target.closest(`[data-rota]`)&&n()}))}var i,a,o=e((()=>{i=document.querySelector(`#botao-menu`),a=document.querySelector(`#menu-principal`)}));function s(e,t){localStorage.setItem(e,JSON.stringify(t))}function c(e,t=null){let n=localStorage.getItem(e);if(!n)return t;try{return JSON.parse(n)}catch(e){return console.error(`Erro ao ler dados do localStorage:`,e),t}}var l=e((()=>{}));function u(e){return e===`light`||e===`dark`}function d(e){document.documentElement.setAttribute(`data-theme`,e)}function f(){let e=c(h,g);return u(e)?e:g}function p(e,t){if(t===`dark`){e.textContent=`Modo claro`,e.setAttribute(`aria-label`,`Ativar modo claro`);return}e.textContent=`Modo escuro`,e.setAttribute(`aria-label`,`Ativar modo escuro`)}function m(){let e=document.querySelector(`#botao-tema`),t=f();d(t),e&&(p(e,t),e.addEventListener(`click`,()=>{let t=document.documentElement.getAttribute(`data-theme`)===`dark`?`light`:`dark`;d(t),s(h,t),p(e,t)}))}var h,g,_=e((()=>{l(),h=`bem-bolado-tema`,g=`light`}));function ee(){te(),y(),b(),x()}function te(){document.querySelectorAll(`.alerta`).forEach(e=>{let t=e.querySelector(`[data-fechar-alerta]`);t&&t.addEventListener(`click`,()=>{e.remove()})})}function v(e,t=`info`,n=null){let r=document.createElement(`div`);r.className=`alerta alerta--${t}`,r.setAttribute(`role`,`alert`),r.textContent=e;let i=n||document.querySelector(`main`);return i&&i.prepend(r),r}function y(){document.querySelectorAll(`.toast`).forEach(e=>{let t=e.querySelector(`[data-fechar-toast]`);t&&t.addEventListener(`click`,()=>{e.remove()})})}function b(){document.querySelectorAll(`[data-modal-abrir]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-modal-abrir`),n=document.querySelector(`#${t}`);n&&n.removeAttribute(`hidden`)})}),document.querySelectorAll(`[data-modal-fechar]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.modal`);t&&t.setAttribute(`hidden`,``)})})}function x(){document.querySelectorAll(`.badge`).forEach(e=>{e.setAttribute(`aria-label`,`Categoria: ${e.textContent.trim()}`)})}var S=e((()=>{}));function C(e){e.innerHTML=`
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
    `}var w=e((()=>{}));function T(e){return`
        <article class="card-projeto">
            <div class="card-projeto__conteudo">
                <h2>${e.titulo}</h2>

                <p>
                    ${e.descricao}
                </p>

                <span class="badge">
                    ${e.categoria}
                </span>
            </div>
        </article>
    `}var E=e((()=>{}));function D(e){e.innerHTML=`
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
                    ${O.map(e=>T(e)).join(``)}
                </div>

            </div>
        </section>
    `}var O,k=e((()=>{E(),O=[{titulo:`Escolinha de Futebol Bem Bolado`,categoria:`Esporte`,descricao:`O projeto desenvolve atividades de futebol, futsal e outras ações esportivas voltadas para crianças e adolescentes. Busca contribuir para o desenvolvimento, a convivência social, a cooperação e o fortalecimento dos vínculos familiares e comunitários.`},{titulo:`Fazendo a Diferença Planalto da Serra`,categoria:`Convivência`,descricao:`O projeto desenvolve atividades voltadas para crianças e adolescentes, utilizando o esporte, a convivência e ações educativas como ferramentas para contribuir com o desenvolvimento social e o fortalecimento dos vínculos familiares e comunitários.`},{titulo:`Entender Para Atender`,categoria:`Assistência social`,descricao:`O projeto desenvolve ações de acompanhamento e apoio às famílias, buscando compreender suas necessidades e contribuir para o fortalecimento da convivência familiar e comunitária e para o acesso a direitos.`}]}));function A(e){e.innerHTML=`
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
    `}var j=e((()=>{}));function M(e){return e.trim()!==``}function N(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function P(e){let t=e.replace(/\D/g,``);return t.length>=10&&t.length<=11}function F(e){return e.replace(/\D/g,``).length===11}function I(e){return e.replace(/\D/g,``).length===8}function L(e){let t=Number(e);return Number.isInteger(t)&&t>=6&&t<=17}function ne(e){let t={};return M(e.nome)||(t.nome=`Informe o nome.`),N(e.email)||(t.email=`Informe um e-mail válido.`),P(e.telefone)||(t.telefone=`Informe um telefone válido.`),F(e.cpf)||(t.cpf=`Informe um CPF válido.`),I(e.cep)||(t.cep=`Informe um CEP válido.`),L(e.idade)||(t.idade=`A idade deve estar entre 6 e 17 anos.`),{valido:Object.keys(t).length===0,erros:t}}var R=e((()=>{}));function z(){let e=document.querySelector(`#formulario-cadastro`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=B(e),r=ne(n);if(U(e),!r.valido){H(e,r.erros);return}V(n),e.reset(),v(`Cadastro enviado com sucesso!`,`sucesso`,e)})}function B(e){let t=new FormData(e);return{nome:t.get(`nome`)?.trim()||``,cpf:t.get(`cpf`)?.trim()||``,idade:t.get(`idade`)?.trim()||``,email:t.get(`email`)?.trim()||``,telefone:t.get(`telefone`)?.trim()||``,cep:t.get(`cep`)?.trim()||``}}function V(e){let t=c(W,[]);t.push({...e,dataCadastro:new Date().toISOString()}),s(W,t)}function H(e,t){Object.entries(t).forEach(([t,n])=>{let r=e.elements[t];if(!r)return;r.setAttribute(`aria-invalid`,`true`),r.classList.add(`campo--erro`);let i=document.createElement(`span`);i.className=`campo__erro`,i.setAttribute(`role`,`alert`),i.textContent=n,r.parentElement.append(i)})}function U(e){e.querySelectorAll(`.campo--erro`).forEach(e=>{e.classList.remove(`campo--erro`),e.removeAttribute(`aria-invalid`)}),e.querySelectorAll(`.campo__erro`).forEach(e=>{e.remove()})}var W,G=e((()=>{R(),l(),S(),W=`bem-bolado-cadastros`}));function K(e){document.querySelectorAll(`[data-rota]`).forEach(t=>{if(t.getAttribute(`data-rota`)===e){t.setAttribute(`aria-current`,`page`);return}t.removeAttribute(`aria-current`)})}var q=e((()=>{}));function J(){let e=window.location.pathname;return e===``?`/`:e}function Y(){let e=J(),t=Q[e];if(!t){re();return}t($),K(e),e===`/cadastro`&&z(),window.scrollTo({top:0,behavior:`smooth`})}function X(e){window.history.pushState({},``,e),Y()}function Z(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-rota]`);if(!t)return;let n=t.getAttribute(`data-rota`);n&&(e.preventDefault(),X(n))})}function re(){$.innerHTML=`
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
    `}function ie(){$&&(Z(),window.addEventListener(`popstate`,Y),Y())}var Q,$,ae=e((()=>{w(),k(),j(),G(),q(),Q={"/":C,"/projetos":D,"/cadastro":A},$=document.querySelector(`#conteudo-principal`)}));t((()=>{o(),_(),S(),ae(),document.addEventListener(`DOMContentLoaded`,()=>{r(),m(),ee(),ie()})}))();