export const formatHtmlContent = (text) => {
    // Verifica se o conteúdo já contém tags HTML
    const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  
    // Se a string contiver HTML, faz a conversão
    if (htmlRegex.test(text)) {
      return text; // Se já for HTML, retorna o texto sem modificações
    }
  
    // Caso contrário, formata o texto com quebras de linha, listas, etc.
    let formattedText = text;
  
    // Substitui quebras de linha por <br />
    formattedText = formattedText.replace(/\n/g, "<br />");
    formattedText = formattedText.replace(/-\s/g, "<li>");
  
    // Substitui as listas (com ou sem itens) com <ul> e <li>
    formattedText = formattedText.replace(/\\"/g, '"');  // Para itens de lista
    formattedText = formattedText.replace(/-\s/g, "<li>");
    // Envolve as listas em <ul>
    formattedText = formattedText.replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");
  
    // Aqui você pode adicionar mais substituições para tags como <b>, <i>, <u>, etc.
  
    return formattedText;
  };
  