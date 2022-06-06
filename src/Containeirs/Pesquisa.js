import {useState, useEffect} from 'react';
import consultarCep, { cep } from 'cep-promise'
import CEPDados from '../components/CEPDados';
function numberOnly(str){
    return str.replace(/[^\d]/g, '');
}

function translate(cepDados){
  return {
      "ESTADO " : cepDados.state,
      "CIDADE " : cepDados.city,
      "BAIRRO " : cepDados.neighborhood,
      "RUA " : cepDados.street
  }
}

function Pesquisa(props){
    const navegarPara = props.navegarPara;
    const ticket = props.ticket;
    const [cepNumber,setCepNumber] = useState("");
    const setResultado = props.setResultado;
    const [cepFavorito,setCepFavorito] = useState("");
    const [cepDados,setCepDados] = useState({});

    useEffect(() => {
      const storedCep = localStorage.getItem("cepFavorito");
      setCepFavorito(storedCep);
    },[]);

    useEffect(() => {
      if(!cepFavorito){
        return;
      }
      localStorage.setItem("cepFavorito",cepFavorito);
      consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(err => setCepDados({"ERRO": err.message}))
    }, [cepFavorito]);

    function handleChange(evt){
        const value = evt.target.value
        setCepNumber(numberOnly(value))
    }
    function handleSuccess(dadosCEP){
      const resultado = translate(dadosCEP);
      setResultado(resultado);
      navegarPara("RESULTADOS")
    }
    function handleError(err){
      const errorMessage = err.message;
      props.setErrorMessage(errorMessage);
      navegarPara("ERROS");
    }
    function handleSearch(){
      ticket.current++;
      const currentTicket =ticket.current;
      navegarPara("CARREGANDO");
      consultarCep(cepNumber)
        .then(result => currentTicket == ticket.current && handleSuccess(result))
        .catch(err =>  currentTicket == ticket.current && handleError(err))
    }

    function handleAdicinarFav(){
      setCepFavorito(cepNumber);
    }
    
    return (<>
          <p>Qual CEP deseja pesquisar?</p>
          <p>CEP favorito: {cepFavorito}</p>
          <p>{cepNumber}</p>
          <input value={numberOnly(cepNumber)} onChange={handleChange}/>
          
          <button onClick = {handleSearch}> Consultar </button>       
        
          <button onClick = {handleAdicinarFav}> Salvar favorito </button>   
          <CEPDados CEPDados={translate(cepDados)}/>  
        </>
    );
  }

export default Pesquisa;