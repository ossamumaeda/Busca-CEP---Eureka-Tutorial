import CEPDados from "../components/CEPDados";
function Resultados(props){

    const navegarPara = props.navegarPara;
    const result = props.result;
    
    const keys = Object.keys(result);
    const elements = keys.map(key => (
        <span key={key}><b>{key}</b>{result[key]}</span>
    ))
    return (<>
          <p>Resultado para o CEP {result.cep}</p>
          <CEPDados CEPDados={result}/>
          <button onClick = {() => navegarPara("PESQUISA")}> Nova busca </button>       
        </>
    );
  }
export default Resultados;