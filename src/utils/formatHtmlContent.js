export const formatHtmlContent = (text) => {
  let formattedText = text;

  // Remove os tokens "AI:" e "Human:" independentemente da posição
  formattedText = formattedText.replace(/\b(?:AI: |Human: )\b\s*/g, "");

  // Formatação de negrito
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  // Substitui quebras de linha por <br />
  formattedText = formattedText.replace(/\n/g, "<br />");

  // Formata títulos Markdown (h1 a h6)
  formattedText = formattedText.replace(
    /^(#{1,6})\s*(.+)$/gm,
    (match, hashes, title) => {
      const level = hashes.length; // Define o nível do título com base no número de #
      return `<h${level}>${title}</h${level}>`;
    }
  );

  formattedText = formattedText.replace(/##|###/g, "");

  // Converte itens de lista que começam com "- " em <li>
  formattedText = formattedText.replace(
    /-\s(.+?)(<br \/>|$)/g,
    "<li>$1</li>$2"
  );

  // Envolve os itens de lista encontrados em uma lista (<ul>)
  formattedText = formattedText.replace(
    /((?:<li>.*?<\/li>\s*)+)/g,
    "<ul>$1</ul>"
  );

  // Converte expressões matemáticas inline delimitadas por \( ... \)
  formattedText = formattedText.replace(
    /\\\((.*?)\\\)/g,
    '<span class="math">($1)</span>'
  );

  // Converte expressões matemáticas em bloco delimitadas por \[ ... \]
  formattedText = formattedText.replace(
    /\\\[(.*?)\\\]/g,
    '<div class="math">[$1]</div>'
  );

  // Formata expressões matemáticas com alinhamento tipo "align*"
  formattedText = formattedText.replace(
    /\\\[\s*\\begin\{align\*\}([\s\S]*?)\\end\{align\*\}\s*\\\]/g,
    (match, content) => {
      // Formata cada linha do cálculo como <div class="math-step">
      const formattedSteps = content
        .trim()
        .split(/\\{2}/) // Divide as linhas separadas por \\
        .map((line) => `<div class="math-step">${line.trim()}</div>`)
        .join("");

      return `<div class="math-block">${formattedSteps}</div>`;
    }
  );

  return formattedText;
};
