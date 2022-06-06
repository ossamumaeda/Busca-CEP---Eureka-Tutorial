import './App.css';
import { useState, useRef } from 'react';
import Pesquisa from './Containeirs/Pesquisa.js'
import Erro from './Containeirs/Erro.js'
import Resultados from './Containeirs/Resultados.js'
import Carregando from './Containeirs/Carregando.js'

function App() {

  const [nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado,setResultado] = useState({});
  const [errorMessage,setErrorMessage] = useState("");
  const ticket = useRef(1);
  function goTo(nomeTela){
    setNomeTela(nomeTela);
  }


  return <div>
    <div className="App">
        <header className="App-header">
          {nomeTela == "PESQUISA" ? <Pesquisa navegarPara = {goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket = {ticket}/> : null}
          {nomeTela == "RESULTADOS" ? <Resultados navegarPara = {goTo} result = {resultado}/> : null}
          {nomeTela == "ERROS" ? <Erro navegarPara = {goTo} errorMessage = {errorMessage}/> : null}
          {nomeTela == "CARREGANDO" ? <Carregando  navegarPara = {goTo} ticket = {ticket}/> : null}
        </header>
    </div>
  </div>
}









export default App;
