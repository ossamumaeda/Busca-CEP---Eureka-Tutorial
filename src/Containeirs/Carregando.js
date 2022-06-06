function Carregando(props){
    const navegarPara = props.navegarPara;
    const ticket = props.ticket;
    function handleCancel(){
      ticket.current++;
      navegarPara("PESQUISA");
    }
    return (<>
          <p>Carregando Resultados ... </p>
          <button onClick = {handleCancel}> Voltar </button>       
        </>
    );
  }
export default Carregando;