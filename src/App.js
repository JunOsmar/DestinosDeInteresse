import React, { useState } from "react";
import "./styles.css";
import Formulario from "./Formulario";
import Destinos from "./Destinos";
import Titulo from "./Titulo";
import Botao from "./Botao";

export default function App() {
  const estadoInicial = "";
  const [nome, setNome] = useState(estadoInicial);
  const [email, setEmail] = useState(estadoInicial);
  const [telefone, setTelefone] = useState(estadoInicial);
  const [cpf, setCpf] = useState(estadoInicial);
  const [pais, setPais] = useState([estadoInicial]);
  const [cidade, setCidade] = useState([estadoInicial]);

  return (
    <>
      <Titulo />
      <div className="container">
        <div className="form">
          <Formulario
            estadoInicial={estadoInicial}
            setNome={setNome}
            setEmail={setEmail}
            setTelefone={setTelefone}
            setCpf={setCpf}
          />
        </div>
        <div className="form">
          <Destinos
            pais={pais}
            setPais={setPais}
            cidade={cidade}
            setCidade={setCidade}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Botao
          estadoInicial={estadoInicial}
          nome={nome}
          email={email}
          telefone={telefone}
          cpf={cpf}
          pais={pais}
          cidade={cidade}
        />
      </div>
    </>
  );
}
