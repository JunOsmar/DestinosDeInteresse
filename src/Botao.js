const Botao = (props) => {
  const enviar = () => {
    if (
      props.nome !== "" &&
      props.email !== "" &&
      props.telefone !== "" &&
      props.cpf !== "" &&
      props.pais !== "" &&
      props.cidade !== ""
    ) {
      console.log(props.nome);
      console.log(props.email);
      console.log(props.telefone);
      console.log(props.cpf);
      console.log(props.pais);
      console.log(props.cidade);
    } else {
      alert("Por favor preencha todos os campos!");
    }
  };

  return (
    <button className="botao" onClick={() => enviar()}>
      Enviar
    </button>
  );
};
export default Botao;
