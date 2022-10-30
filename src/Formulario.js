import React from "react";
import InputMask from "react-input-mask";

const Formulario = (props) => {
  const handleFormChange = (e) => {
    if (e.target.getAttribute("name") === "n_nome") {
      props.setNome(e.target.value);
    } else if (e.target.getAttribute("name") === "n_email") {
      props.setEmail(e.target.value);
    } else if (e.target.getAttribute("name") === "n_telefone") {
      props.setTelefone(e.target.value);
    } else if (e.target.getAttribute("name") === "n_cpf") {
      props.setCpf(e.target.value);
    }
  };

  return (
    <div>
      <form name="f_dados">
        <div className="label">
          <label>Nome:</label>
        </div>

        <input
          className="input"
          type="text"
          name="n_nome"
          id="i_nome"
          value={props.nome}
          onChange={(e) => handleFormChange(e)}
        />

        <div className="label">
          <label>Email:</label>
        </div>

        <input
          className="input"
          type="email"
          name="n_email"
          id="i_email"
          value={props.email}
          onChange={(e) => handleFormChange(e)}
        />

        <div className="label">
          <label>Telefone:</label>
        </div>

        <InputMask
          className="input"
          mask="(99) 99999-9999"
          name="n_telefone"
          id="i_telefone"
          value={props.telefone}
          onChange={(e) => handleFormChange(e)}
        />

        <div className="label">
          <label>CPF:</label>
        </div>
        <InputMask
          className="input"
          mask="99.999.999-99"
          name="n_cpf"
          id="i_cpf"
          value={props.cpf}
          onChange={(e) => handleFormChange(e)}
        />
      </form>
    </div>
  );
};

export default Formulario;
