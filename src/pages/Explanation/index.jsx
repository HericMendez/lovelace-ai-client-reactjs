/* eslint-disable react/no-unescaped-entities */
import * as C from "./styles.jsx";

const ExplanationPage = () => {
  return (
    <C.Container>    

    <C.Content>

      <C.Title>
        Chatbot de IA: LangChain vs. LangGraph na Plataforma TogetherAi
      </C.Title>

      <C.Section>
        <C.Subtitle>O que é LangChain?</C.Subtitle>
        <C.Text>
          LangChain é um framework de código aberto projetado para simplificar o
          desenvolvimento de aplicações que utilizam modelos de linguagem de
          grande porte (Large Language Models - LLMs). Ele permite a integração
          de diferentes modelos e a conexão com diversas ferramentas e fontes de
          dados.
        </C.Text>
        <C.Subtitle>LangChain com TogetherAi</C.Subtitle>
        <C.Text>
          No caso deste projeto, a integração com LangChain é realizada através
          do arquivo <code>chainController.js</code>. Neste módulo, utiliza-se o{" "}
          <code>@langchain/core</code> para criar um fluxo linear de
          processamento entre humano e máquina (<code>HumanMessage()</code> e
          <code>AIMessage()</code>), onde um prompt é enviado ao modelo
          DeepSeek-V3, integrado via TogetherAi. Esse fluxo simples permite
          receber respostas diretas e objetivas a partir dos prompts fornecidos.{" "}
        </C.Text>
        <C.CodeBlock>
          {`  const customInstructions = [
    new HumanMessage(
      "Apresente-se como Ada, você será minha tutora de matemática, e responderá apenas a 
      perguntas de matemática. 
      Perguntas não relacionadas com matemática devem receber uma devolutiva negativa."
    ),
    new AIMessage("Olá! Sou Ada, sua tutora de matemática. Como posso ajudar?"),
  ];

  try {
    const response = await chatModel.invoke([
      ...customInstructions,
      ...messages.map((msg) => new HumanMessage(msg.content)),
    ]);
    return response;
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    throw new Error("Erro ao chamar o modelo");
  }`}
        </C.CodeBlock>
        <C.Text>
          Neste caso, foi definida um prompt inicial fixo, dandos estruções
          expecíficas ao modelo de IA. Isso garante a validação das mensagens
          enviadas pelo usuário fazendo com que o modelo apenas aceite perguntas
          relacionadas à matemática.
        </C.Text>
      </C.Section>

      <C.Section>
        <C.Subtitle>O que é LangGraph?</C.Subtitle>
        <C.Text>
          LangGraph é uma plataforma que visa otimizar a construção de agentes
          de inteligência artificial, especialmente em arquiteturas multiagente.
          Ele usa uma abordagem baseada em grafos para modelar fluxos de
          trabalho complexos e interações entre agentes.
        </C.Text>
        <C.Subtitle>LangGraph com TogetherAi</C.Subtitle>
        <C.Text>
          Em contrapartida, a integração com LangGraph (arquivo{" "}
          <code>langgraphModel.js</code>) utiliza a mesma plataforma TogetherAi,
          mas adota uma abordagem baseada em grafos para modelar fluxos de
          decisão. Cada nó (node) representa uma etapa do fluxo de IA, e as
          arestas (edge) definem a transição entre essas etapas. Essa estrutura
          é especialmente útil quando o fluxo de interação é complexo ou precisa
          de múltiplos passos com decisões condicionais.
        </C.Text>
        <C.Text>
          A estrutura em grafo permite definir um fluxo dinâmico e modular,
          facilitando a implementação de agentes que podem interromper,
          redirecionar ou intervir em diferentes pontos do processo.
        </C.Text>
        <C.CodeBlock>
          {`const createGraph = () => {
  const graph = new Graph();

  graph.addNode("start", startNode);
  graph.addNode("processData", processData);
  graph.addNode("decision", decisionNode);
  graph.addNode("end", endNode);

  graph.addEdge("start", "processData");
  graph.addEdge("processData", "decision");
  graph.addEdge("decision", (data) => (data.success ? "end" : "start"));

  return graph;
};`}
        </C.CodeBlock>
        <C.Text>
          Este fluxograma ilustra a estrutura em grafo e o fluxo condicional
          implementado no código:
        </C.Text>
        <C.CodeBlock>{`
               +-------+
               | start |
               +-------+
                   |
                   v
            +------------ +
            | processData |
            +------------ +
                   |
                   v
             +----------+
             | decision |
             +----------+
              |        |
      (false) |        | (true)
              |        |
              v        v
          +-------+  +-----+
          | start |  | end |
          +-------+  +-----+
        `}</C.CodeBlock>
        <C.Text>
          <ol>
            <li>
              <strong>start:</strong>O fluxo inicia no nó "start" (função
              startNode).
            </li>
          </ol>
        </C.Text>
      </C.Section>

      <C.Section>
        <C.Subtitle>Conceito de Grafos</C.Subtitle>
        <C.Text>
          Um <strong>grafo</strong> é uma estrutura de dados composta por{" "}
          <strong>nós</strong> (ou vértices) e <strong>arestas</strong> que
          conectam esses nós. Essa estrutura é utilizada para modelar
          relacionamentos e interações complexas:
        </C.Text>
        <C.Text>
          <ul>
            <li>
              <strong>Nós:</strong> Representam entidades ou etapas em um
              processo.
            </li>
            <li>
              <strong>Arestas:</strong> Conectam os nós e definem a relação ou a
              transição entre eles.
            </li>
          </ul>
        </C.Text>

        <C.Text>
          No contexto do LangGraph, os nós representam etapas do fluxo de IA,
          enquanto as arestas indicam a sequência ou os caminhos possíveis entre
          essas etapas. Essa abordagem é ideal para cenários onde a interação
          não é linear e requer decisões baseadas no contexto, permitindo uma
          modelagem flexível e expansível do fluxo.
        </C.Text>
      </C.Section>

      <C.Section>
        <C.Subtitle>Conclusão</C.Subtitle>
        <C.Text>
          <ul>
            <li>
              <strong>LangChain</strong> é focado na integração direta com
              modelos de linguagem.
            </li>
            <li>
              <strong>LangGraph</strong> concentra-se na construção de agentes
              de IA usando uma estrutura baseada em grafos.
            </li>
            <li>
              <strong>LangChain</strong> facilita o desenvolvimento de
              aplicações baseadas em linguagem.
            </li>
            <li>
              <strong>LangGraph</strong> oferece uma experiência gráfica para
              fluxos de trabalho complexos.
            </li>
          </ul>
        </C.Text>
      </C.Section>
      <br />
    </C.Content></C.Container>
  );
};

export default ExplanationPage;
