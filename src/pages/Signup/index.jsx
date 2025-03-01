import styled from "styled-components";

// Styled-components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  margin-top: 100vh;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  color: #444;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
`;

const ExampleCode = styled.pre`
  background-color: #2d2d2d;
  color: white;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 20px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;

const HighlightText = styled.span`
  color: #e03e36;
  font-weight: bold;
`;

const TogetherAIVersusLangGraphPage = () => {
  return (
    <PageContainer>
      <Title>Entendendo a Diferença entre TogetherAI e LangGraph</Title>

      <Section>
        <Subtitle>O que são TogetherAI e LangGraph?</Subtitle>
        <Text>
          <HighlightText>TogetherAI</HighlightText> e{" "}
          <HighlightText>LangGraph</HighlightText> são duas ferramentas
          poderosas para trabalhar com modelos de linguagem, mas com propósitos
          diferentes. Vamos explorar o funcionamento de cada uma delas.
        </Text>
      </Section>

      <Section>
        <Subtitle>TogetherAI</Subtitle>
        <Text>
          O TogetherAI é uma plataforma de inteligência artificial que permite
          interagir com modelos de linguagem para tarefas de processamento de
          texto, geração de respostas, e análise semântica. Ele proporciona uma
          maneira simples e eficiente de realizar consultas em modelos de
          linguagem de grande porte.
        </Text>
        <Text>
          A principal característica do TogetherAI é sua facilidade de
          integração e a capacidade de tratar múltiplas interações simultâneas
          com o modelo. Ele é ótimo para automatizar processos de geração de
          texto e análise em tempo real.
        </Text>
        <Text>Exemplo básico de uso do TogetherAI:</Text>
        <ExampleCode>
          {`import { TogetherAI } from 'togetherai';\n
const model = new TogetherAI({ apiKey: 'your-api-key' });\n
const response = await model.call('Qual é a capital do Brasil?');\n
console.log(response);`}
        </ExampleCode>
        <Text>
          Este código consulta o modelo TogetherAI para obter a capital do
          Brasil de forma simples.
        </Text>
      </Section>

      <Section>
        <Subtitle>LangGraph</Subtitle>
        <Text>
          O LangGraph é uma ferramenta para construir grafos de conhecimento,
          permitindo interações mais complexas entre diferentes modelos de IA e
          fontes de dados. Em vez de usar uma sequência linear de comandos,
          LangGraph organiza as interações de maneira gráfica e permite modelar
          fluxos de informações entre nós.
        </Text>
        <Text>
          Grafos são estruturas compostas por nós e arestas, onde os nós
          representam diferentes entidades e as arestas representam as relações
          entre elas. No LangGraph, você pode definir interações entre
          diferentes tarefas e até conectar múltiplos modelos de IA.
        </Text>
        <Text>Exemplo básico de uso do LangGraph:</Text>
        <ExampleCode>
          {`import { LangGraph } from 'langgraph';\n
const graph = new LangGraph();\n
graph.addNode('pergunta', 'Qual é a raiz quadrada de 16?');\n
graph.addNode('resposta', 'A raiz quadrada de 16 é 4.');\n
graph.addEdge('pergunta', 'resposta');\n
const result = graph.query('pergunta');\n
console.log(result);`}
        </ExampleCode>
        <Text>
          Neste exemplo, estamos criando um grafo simples que conecta uma
          pergunta à sua resposta. O LangGraph é muito útil para organizar
          fluxos de informações em tarefas mais complexas.
        </Text>
      </Section>

      <Section>
        <Subtitle>Grafos: O Conceito e Aplicação</Subtitle>
        <Text>
          Grafos são uma estrutura fundamental em ciência da computação. Eles
          são usados para representar relações entre objetos ou entidades. No
          LangGraph, você pode modelar interações dinâmicas entre vários modelos
          de IA, criando uma rede complexa de decisões e respostas.
        </Text>
        <Text>Exemplo visual de um grafo:</Text>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Graph_Example.svg/500px-Graph_Example.svg.png"
          alt="Exemplo de Grafo"
        />
        <Text>
          A imagem acima mostra um exemplo de grafo simples. No LangGraph, você
          pode construir grafos muito mais complexos, onde os nós representam
          perguntas, respostas e outras entidades relacionadas, e as arestas
          representam as relações entre elas.
        </Text>
      </Section>

      <Section>
        <Subtitle>Comparação entre TogetherAI e LangGraph</Subtitle>
        <Text>
          - <HighlightText>TogetherAI</HighlightText> é ótimo para tarefas
          lineares e de processamento simples de texto. Ele foca em uma
          abordagem mais direta e rápida.
        </Text>
        <Text>
          - <HighlightText>LangGraph</HighlightText> é ideal para quando você
          precisa modelar tarefas complexas e interativas com múltiplos fluxos
          de informações, usando a estrutura de grafos.
        </Text>
      </Section>

      <Section>
        <Subtitle>Conclusão</Subtitle>
        <Text>
          Ambas as ferramentas, <HighlightText>TogetherAI</HighlightText> e{" "}
          <HighlightText>LangGraph</HighlightText>, têm suas vantagens
          dependendo do tipo de aplicação. O TogetherAI é uma excelente escolha
          para interações simples e diretas com modelos de IA, enquanto o
          LangGraph se destaca quando há necessidade de construir relações
          complexas entre dados e modelos.
        </Text>
      </Section>
    </PageContainer>
  );
};

export default TogetherAIVersusLangGraphPage;
