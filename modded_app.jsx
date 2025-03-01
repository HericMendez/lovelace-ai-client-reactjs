import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  // Função para enviar a pergunta ao backend
  const enviarPergunta = async () => {
    if (!pergunta.trim()) {
      setErro('Por favor, insira uma pergunta.');
      return;
    }
    setErro('');
    setLoading(true);

    try {
      // Envia a pergunta para o backend e aguarda a resposta
      const respostaAPI = await axios.post('http://localhost:3000/pergunta', { pergunta });
      setResposta(respostaAPI.data.resposta);
    } catch (err) {
      setErro('Erro ao obter a resposta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Tutor Matemático</h1>
      <div className="input-container">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Digite uma equação matemática"
        />
        <button onClick={enviarPergunta} disabled={loading}>
          {loading ? 'Carregando...' : 'Perguntar'}
        </button>
      </div>
      {erro && <p className="erro">{erro}</p>}
      {resposta && (
        <div className="resposta">
          <h2>Resposta:</h2>
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}

export default App;
