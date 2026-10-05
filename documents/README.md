# Bem Bolado

Site institucional da **Associação Cristã Socioassistencial Esportiva Bem Bolado**, organização do terceiro setor localizada em Amparo, São Paulo.

O projeto tem como objetivo apresentar a instituição, seus projetos e ações sociais, além de disponibilizar um formulário de cadastro para pessoas interessadas em participar das atividades.

---

## 📌 Sobre o projeto

O Bem Bolado utiliza o esporte, a educação e a convivência social como ferramentas para contribuir com o desenvolvimento de crianças e adolescentes, fortalecer vínculos familiares e comunitários e promover a integração social.

O site foi desenvolvido como projeto acadêmico, utilizando tecnologias fundamentais do desenvolvimento web e aplicando conceitos de organização, acessibilidade, responsividade, modularização e separação de responsabilidades.

---

## 🎯 Objetivos

- Apresentar a Associação Bem Bolado.
- Divulgar os projetos desenvolvidos pela instituição.
- Facilitar o cadastro de pessoas interessadas em participar das ações.
- Criar uma interface acessível, responsiva e organizada.
- Aplicar conceitos de HTML5, CSS3 e JavaScript.
- Utilizar uma arquitetura modular em JavaScript.
- Implementar navegação em formato SPA.
- Armazenar dados do formulário e preferência de tema no `localStorage`.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6 Modules)**
- **LocalStorage**
- **Git**
- **GitHub**

O projeto não utiliza frameworks ou bibliotecas externas.

---

## 📂 Estrutura do projeto

```text
bem-bolado-terceiro-setor/
│
├── index.html
│
├── css/
│   └── style.css
│
├── imagens/
│   ├── bem-bolado-futebol.jpg
│   └── bem-bolado-comunidade.jpeg
│
└── js/
    ├── main.js
    │
    ├── components/
    │   ├── feedback.js
    │   ├── form.js
    │   ├── menu.js
    │   ├── navigation.js
    │   └── theme.js
    │
    ├── pages/
    │   ├── cadastro.js
    │   ├── home.js
    │   └── projetos.js
    │
    ├── router/
    │   └── router.js
    │
    ├── storage/
    │   └── storage.js
    │
    ├── templates/
    │   └── templates.js
    │
    ├── validation/
    │   └── formValidation.js
    │
    └── utils/
        └── dom.js
```

---

## 🧩 Organização do JavaScript

O JavaScript foi dividido em módulos de acordo com suas responsabilidades.

### `main.js`

Responsável apenas pela inicialização dos principais módulos da aplicação.

### `components/`

Contém componentes responsáveis por comportamentos específicos da interface.

- `menu.js`: controla o menu de navegação e o menu responsivo.
- `theme.js`: controla os modos claro e escuro.
- `feedback.js`: controla alertas, toasts, modais e badges.
- `form.js`: controla o envio e o processamento do formulário.
- `navigation.js`: atualiza o estado dos links da navegação.

### `pages/`

Responsável pela renderização do conteúdo de cada página da aplicação.

- `home.js`: página inicial.
- `projetos.js`: apresentação dos projetos.
- `cadastro.js`: formulário de cadastro.

### `router/`

Responsável pela navegação da aplicação no formato **Single Page Application (SPA)**.

O router utiliza:

- `history.pushState()`
- `popstate`
- rotas internas
- renderização dinâmica do conteúdo

### `storage/`

Centraliza as operações realizadas no `localStorage`.

Entre os dados armazenados estão:

- cadastros realizados;
- preferência de tema.

### `templates/`

Contém funções responsáveis pela criação de estruturas HTML reutilizáveis através de template literals.

### `validation/`

Concentra as regras de validação do formulário, como:

- campos obrigatórios;
- e-mail;
- telefone;
- CPF;
- CEP;
- idade entre 6 e 17 anos.

### `utils/`

Contém funções utilitárias reutilizáveis para manipulação do DOM.

---

## 🌐 Navegação SPA

O projeto utiliza uma abordagem de **Single Page Application**.

As principais rotas são:

```text
/
├── /projetos
└── /cadastro
```

A navegação interna é interceptada pelo JavaScript e o conteúdo do elemento principal é atualizado sem a necessidade de carregar um novo arquivo HTML.

O navegador também mantém o histórico de navegação através da API History, permitindo utilizar os botões de voltar e avançar.

---

## 📝 Formulário de cadastro

O formulário possui campos para:

- Nome completo
- CPF
- Idade
- E-mail
- Telefone
- CEP

São utilizadas validações nativas do HTML5 e validações adicionais em JavaScript.

Quando ocorre um erro, o sistema apresenta feedback visual e utiliza atributos de acessibilidade, como `aria-invalid`.

Os cadastros aprovados são armazenados no `localStorage`.

---

## 💾 LocalStorage

O `localStorage` é utilizado para manter informações mesmo após o usuário fechar ou atualizar a página.

Os dados são armazenados em formato JSON.

São utilizados principalmente dois conjuntos de dados:

```text
bem-bolado-cadastros
bem-bolado-tema
```

O acesso ao `localStorage` é centralizado no módulo `storage.js`, evitando que diferentes componentes manipulem diretamente o armazenamento.

---

## 🌓 Tema claro e escuro

O site possui suporte aos modos:

- Modo claro
- Modo escuro

A preferência escolhida pelo usuário é salva no `localStorage`, permitindo que o tema seja mantido quando a página for acessada novamente.

---

## ♿ Acessibilidade

O projeto utiliza recursos de acessibilidade, incluindo:

- HTML semântico;
- hierarquia de títulos;
- `label` associado aos campos;
- navegação por teclado;
- `:focus-visible`;
- link para pular diretamente ao conteúdo principal;
- atributos ARIA quando necessários;
- mensagens de validação acessíveis;
- textos alternativos nas imagens.

---

## 📱 Responsividade

O layout foi desenvolvido para diferentes tamanhos de tela.

Foram considerados diferentes pontos de quebra para:

- dispositivos móveis;
- tablets;
- notebooks;
- desktops;
- telas maiores.

O menu de navegação também possui comportamento responsivo, sendo transformado em menu hambúrguer em telas menores.

---

## 🎨 CSS

O arquivo `style.css` concentra os estilos da aplicação.

Entre os recursos utilizados estão:

- variáveis CSS;
- CSS Grid;
- Flexbox;
- componentes reutilizáveis;
- estados de interação;
- estilos de formulário;
- alertas;
- toasts;
- modais;
- badges;
- responsividade;
- estados de foco;
- suporte ao tema claro e escuro.

---

## 🔐 Boas práticas

Durante o desenvolvimento foram consideradas práticas como:

- separação de responsabilidades;
- modularização;
- reutilização de código;
- nomes de arquivos e funções descritivos;
- uso de `addEventListener`;
- utilização de ES6 Modules;
- centralização do acesso ao `localStorage`;
- uso de `textContent` quando apropriado;
- organização do projeto por responsabilidade.

---

## 🚀 Como executar o projeto

Como o projeto utiliza **ES6 Modules**, recomenda-se executá-lo através de um servidor local.

Uma opção é utilizar a extensão **Live Server** no Visual Studio Code.

Após iniciar o servidor, abra o projeto pelo endereço fornecido pelo servidor local.

---

## 📚 Projetos apresentados

O site apresenta três projetos e ações:

### Escolinha de Futebol Bem Bolado

Desenvolve atividades esportivas voltadas para crianças e adolescentes, utilizando o futebol, o futsal e outras ações como ferramentas de desenvolvimento, convivência e integração social.

### Fazendo a Diferença Planalto da Serra

Desenvolve atividades voltadas para crianças e adolescentes, utilizando o esporte, a convivência e ações educativas como ferramentas de desenvolvimento social.

### Entender Para Atender

Desenvolve ações de acompanhamento e apoio às famílias, buscando compreender suas necessidades e contribuir para o fortalecimento da convivência familiar e comunitária e para o acesso a direitos.

---

## 🌱 Projeto acadêmico

Este projeto foi desenvolvido como parte da formação em **Análise e Desenvolvimento de Sistemas**, com foco na aplicação prática dos conhecimentos de desenvolvimento web.

O desenvolvimento passou por etapas envolvendo:

1. Estruturação HTML.
2. Desenvolvimento do CSS.
3. Implementação da lógica com JavaScript.
4. Modularização e organização do projeto.
5. Implementação de navegação SPA.
6. Persistência de dados com `localStorage`.

---

## 📌 Controle de versão

O projeto utiliza **Git** para controle de versão e **GitHub** para hospedagem do repositório.

O desenvolvimento foi realizado diretamente na branch `main`.

Até o momento, não foram utilizados:

- branch `develop`;
- branches `feature`;
- Issues;
- Milestones;
- Pull Requests;
- Releases ou tags de versão.

As principais etapas foram registradas através de commits.

---

## 👩‍💻 Autora

**Érica Alves**

Estudante de Análise e Desenvolvimento de Sistemas.

Projeto desenvolvido para fins acadêmicos.