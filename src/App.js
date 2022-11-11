import { useState } from 'react';
import api from './services/api';
import style from './App.module.scss';

function App() {
   
  const [input, setInput] = useState('');
  const [repo, setRepo] = useState('');

  
  async function handleSearch() {
    if(input === ''){
      alert("Insira algum valor")
      return;
    }
  
    try{
      const response = await api.get(`repositories?q=language:${input}`, { params: { per_page: 100 } })
      setRepo(response.data.items)
      console.log(response.data.items)

    }catch{
        alert("Erro ao buscar");
        setInput("");
      }
    }

  return (
    <div className={style.repoList}>
        <h1>Pesquise os repositórios do Github por linguagem:</h1>
      <div className={style.inputContainer}>
        <input 
          type="text"
          placeholder="Exemplo: Java"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {Object.keys(repo).length > 1 && (
        <main >
          <h2>Exibindo repositórios com a linguagem: {input}</h2>
          <ul>
          {repo.map((repo, index) => (
                <li key={index} className={style.item}>
                <span><strong>Nome do repositório: </strong>{repo.name}</span> 
                <span><strong>Usuário: </strong>{repo.owner.login}</span>
                <a href={repo.html_url} target="_blank"><button>Acesse</button></a>
                </li>
          ))}   
          </ul>
        </main>
      )}
    </div>
   )
}

export default App;
