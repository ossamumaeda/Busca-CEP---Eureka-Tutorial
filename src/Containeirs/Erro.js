function Erro(props){
    const navegarPara = props.navegarPara;
    return (<>
          <p>Erro na consulta !</p>
          <p>{props.errorMessage}</p>
          <button onClick={() => navegarPara("PESQUISA")}> Nova busca </button>       
        </>
    );
  }
export default Erro;