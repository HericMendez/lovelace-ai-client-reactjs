import * as C from "./styles.jsx";

const DocsPage = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Title>Documentação do projeto </C.Title>

        <C.Section>
          <C.SectionTitle>1 - Introdução</C.SectionTitle>
          <C.Subtitle>Sobre o Projeto</C.Subtitle>
          <C.Text>
            Lovelace é um protótipo de tutor virtual utilizando Inteligência Artificial. O
            objetivo do projeto é explorar o uso de inteligência artificial para
            auxiliar no ensino de matemática, oferecendo uma experiência
            interativa e dinâmica para os usuários.
          </C.Text>
          <C.Text>
            O sistema está dividido em duas partes principais:
            <ul>
              <li>
                <strong>Chat baseado em LangChain:</strong> Um assistente
                virtual que utiliza o framework LangChain para processar
                perguntas e fornecer respostas em tempo real, permitindo
                interações mais diretas e acessíveis.
              </li>
              <li>
                <strong>Modelo baseado em Grafos com LangGraph:</strong> Uma
                abordagem mais avançada que estrutura o conhecimento matemático
                em forma de grafo, utilizando o LangGraph para criar um fluxo de
                aprendizado mais estruturado e adaptável às necessidades do
                usuário.
              </li>
            </ul>
          </C.Text>
          <C.Text>
            O projeto foi desenvolvido com React no front-end e Node.js no
            back-end, garantindo uma arquitetura moderna e escalável.
          </C.Text>
          <C.Subtitle>Inspiração</C.Subtitle>
          <C.Text>
            O nome Lovelace é uma homenagem à Ada Lovelace, matemática e
            pioneira da programação. Ada foi a primeira pessoa a reconhecer que
            os computadores poderiam ir além de simples cálculos matemáticos,
            estabelecendo os fundamentos da programação moderna.
          </C.Text>
          <C.Text>
            Assim como Ada Lovelace enxergou o potencial dos algoritmos para
            resolver problemas complexos, este projeto busca utilizar
            inteligência artificial e estruturação de conhecimento para auxiliar
            no ensino de matemática, tornando o aprendizado mais intuitivo e
            acessível.
          </C.Text>
        </C.Section>
        <C.Section>
          <C.SectionTitle>2 - Tecnologias Utilizadas</C.SectionTitle>
          <C.Text>
            <C.Text>A escolha das tecnologias utilizadas neste projeto justifica-se principalmente pela versatilidade da linguagem de programação Javascript, e por sua grande quantidade de bibiliotecas e frameworks de fácil implementação e manutenção. A ampla experiência do desenvolvedor com a linguagem também foi um forte fator nessa escolha </C.Text>
            <ul>
              <li>
                <strong>Frontend:</strong> React.js + Vite
              </li>
              <li>
                <strong>Estilização:</strong> CSS + Styled Components
              </li>
              <li>
                <strong>Backend:</strong> Node.js + Express
              </li>
              <li>
                <strong>Plataforma de IA:</strong>{" "}
                <a href="https://www.together.ai/">Together AI</a>
              </li>
              <li>
                <strong>Modelo de LLM:</strong> Deepseek-V3
              </li>
              <li>
                <strong>Frameworks de IA:</strong> LangChain/LangGraph
              </li>
              <li>
                <strong>Versionamento:</strong> Git/Github
              </li>
              <li>
                <strong>Deploy:</strong> Vercel
              </li>
            </ul>
          </C.Text>
        </C.Section>
        <C.Section>
          <C.SectionTitle>3 - Configuração e Instalação</C.SectionTitle>

          <div>
            <C.Subtitle>Instalando e rodando o servidor (NodeJS) :</C.Subtitle>
            <br />
            <C.Subtitle>Configuração de ambiente</C.Subtitle>
            <C.Text>
              Instale o Node instalado localmente, se já não tiver:{" "}
              <a href="https://nodejs.org/en/download">
                https://nodejs.org/en/download
              </a>
            </C.Text>
            <C.Subtitle>Clonar os repositórios</C.Subtitle>
            <C.Text>
              Rode os comandos no terminal:
              <C.CodeBlock>
                {`# Por SSH: 
git clone git@github.com:HericMendez/lovelace-ai-server-nodejs.git 
# Por HTTPS: 
git clone https://github.com/HericMendez/lovelace-ai-server-nodejs.git`}
              </C.CodeBlock>
            </C.Text>
            <C.Subtitle>Instalar dependências</C.Subtitle>
            <C.Text>
              <C.CodeBlock>{`cd lovelace-ai-server-nodejs
npm install
npm start`}</C.CodeBlock>
              Server roda por padrão em{" "}
              <a href="http://localhost:3000/">localhost:3000</a>
            </C.Text>

            <br />
            <C.Subtitle>Instalando e rodando o front-end :</C.Subtitle>
            <br />
            <C.Subtitle>Clonar os repositórios</C.Subtitle>
            <C.Text>
              <C.CodeBlock>
                {`# Por SSH: 
git clone git@github.com:HericMendez/lovelace-ai-client-reactjs.git # Por
HTTPS: 
git clone https://github.com:HericMendez/lovelace-ai-client-reactjs.git`}
              </C.CodeBlock>
            </C.Text>

            <C.Subtitle>Instalar dependências</C.Subtitle>
            <C.Text>
              <C.CodeBlock>{`cd ../lovelace-ai-client-reactjs
npm install 
npm start`}</C.CodeBlock>
              Server roda por padrão em{" "}
              <a href="http://localhost:5173/">localhost:5173</a>
            </C.Text>
          </div>
        </C.Section>

        <C.Section>
          <C.SectionTitle>4 - Uso</C.SectionTitle>
          <C.Subtitle>Rodando no Front-end</C.Subtitle>
          <C.Text>
            Após seguir os passos acima e tendo as dependências instaladas em
            suas respectivas pastas, execute no terminal da pasta{" "}
            <code>lovelace-ai-server-nodejs</code> o comando{" "}
            <code>npm start</code>, e no terminal da pasta pasta{" "}
            <code>lovelace-ai-client-reactjs</code>, o comando{" "}
            <code>npm run dev</code>. Com o servidor e o cliente rodando sem
            erros, a aplicação deve funcionar normalmente.
          </C.Text>
          <br />
          <C.Subtitle>Testando a API</C.Subtitle>{" "}
          <C.Text>
            Para testar o servidor diretamente sem o uso do front-end, use um
            software como o <a href="https://www.postman.com/">Postman</a>.{" "}
            <br />
            Para o propósito deste teste, a apiKey encontra-se no diretório{" "}
            <code>./src/config/config.js</code>. Porém, você pode gerar uma api
            key em <a href="https://www.together.ai/">www.together.ai</a>.{" "}
            <br />
            Ambos os modelos (LanngChain e LangGraph) utilizam o mesmo formato
            de corpo de requisição.
            <C.CodeBlock>
              {`# Exemplo de POST request:
# Cabeçalho (headers):
{
  "Content-Type": "application/json"
  "Authorization": "Bearer [TOGETHER_AI_API_KEY]"
}

# Corpo da requisição (body):
{
  "messages": [
        { "role": "user", "content": "Qual é a raiz quadrada de 64?" }
  ]
}

# Resposta esperada:
{
    "response": "AI: A raiz quadrada de 64 é 8, pois 8 multiplicado por 8 resulta em 64."
}
`}
            </C.CodeBlock>
          </C.Text>
          <br />
          <C.Subtitle>Rotas</C.Subtitle>
          <C.Text>
            <strong>Rota do modelo LangChain (POST):</strong>
            <C.CodeBlock>http://localhost:3000/api/chat/LangChain</C.CodeBlock>
            <strong>Rota do modelo LangGraph (POST):</strong>
            <C.CodeBlock>http://localhost:3000/api/chat/LangGraph</C.CodeBlock>
            <strong>Ping Test (GET):</strong>
            <C.CodeBlock>http://localhost:3000/api/ping</C.CodeBlock>
          </C.Text>
        </C.Section>

        <C.Section>
          <C.SectionTitle>5 - Estrutura do projeto</C.SectionTitle>
          <C.Text>
            <C.Subtitle>Front end:</C.Subtitle>
            <C.CodeBlock>
              {`A estrutura padrão para componentes e páginas é:
    ComponentName/
    ├── index.jsx
    └── styles.js

├lovelace-ai-client
├── node_modules/                   # instaldo via npm install - não incluído no deploy
├── public/
├── src/                            # pasta principal do código fonte
│   ├── assets/                     
│   │   └── ...
│   ├── components/                 # componentes modulares e reutilizáveis
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── ChatBox/
│   │   │   └── ...
│   │   ├── Documentation/
│   │   │   └── ...
│   │   ├── Message/
│   │   │   └── ...
│   │   ├── Navbar/
│   │   └── ...
│   ├── config/                    # valores de constantes e configurações de api
│   │   │   └── index.js
│   ├── pages/                      
│   │   ├── Chat/                  # página principal do chatbot
│   │   │   ├── ...
│   │   ├── Docs.jsx
│   │   │   └── ...
│   │   ├── Explanation/
│   │   │   └── ...
│   │   └── Welcome/
│   │   │   └── ...
│   ├── styles/
│   │   └── global.js               # arquivo de estilos globais
│   ├── utils/                      # funções reutilizáveis
│   │   └── formatHtmlContent.js    # formata elementos html recebidos da api para texto padrão   
│   ├── App.jsx
│   ├── main.js                     # arquivo de entrada 
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
            `}
            </C.CodeBlock>
            <C.Subtitle>Back end:</C.Subtitle>
            <C.CodeBlock>
              {`├lovelace-ai-server
├── node_modules/                    # instaldo via npm install - não incluído no deploy
├── src/
│   ├── config/                      # configurações e variáveis globais
│   │   └── config.js
│   ├── controllers/                 # regras de negócio e lógica da aplicação
│   │   ├── chainController.js
│   │   └── graphController.js
│   ├── models/                      # modelo de grafo
│   │   └── Graph.js
│   ├── routes/                      # rotas de comunicação com o front-end
│   │   └── chatRoutes.js
│   └── services/                    # serviço de comunicação com a api - entrada e saída de dados
│       ├── chainService.js
│       └── graphService.js
├── .env                             # variáveis de ambiente (arquivo não incluído no deploy)
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js                        # arquivo de entrada
              `}
            </C.CodeBlock>
          </C.Text>
        </C.Section>

        <C.Section>
          <C.SectionTitle>6 - Licença</C.SectionTitle>
          <C.Text>
            Este é um projeto totalmnente open source, criado para fins de teste
            e aprendizado.
          </C.Text>
        </C.Section>
        <br />
      </C.Content>
    </C.Container>
  );
};

export default DocsPage;
