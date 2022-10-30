import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const urlPaises = "https://www.amazon-api.sellead.com/country";
const urlCidades = "https://www.amazon-api.sellead.com/city";

const Destinos = (props) => {
  const handleCountryChange = (e) => {
    let obj = e;
    let arrayPaises = [];
    let paises = obj.map(function (pais) {
      return arrayPaises.push(pais.value);
    });
    props.setPais(arrayPaises);
  };

  const handleCityChange = (e) => {
    let obj = e;
    let arrayCidades = [];
    let cidades = obj.map(function (cidade) {
      return arrayCidades.push(cidade.value);
    });
    props.setCidade(arrayCidades);
  };

  const [countryOptions, setCountryOptions] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get(urlPaises).then((res) => {
        let result = res.data;
        result.map((pais) => {
          return arr.push({ value: pais.name_ptbr, label: pais.name_ptbr });
        });
        setCountryOptions(arr);
      });
    };
    getData();
  }, []);

  const [cityOptions, setCityOptions] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get(urlCidades).then((res) => {
        let result = res.data;
        result.map((cidade) => {
          return arr.push({ value: cidade.name_ptbr, label: cidade.name_ptbr });
        });
        setCityOptions(arr);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <form name="f_destino">
        <div className="label">
          <label>País:</label>
        </div>
        <Select
          isMulti
          className="input"
          options={countryOptions}
          name="n_pais"
          id="i_pais"
          onChange={(e) => handleCountryChange(e)}
        />

        <div className="label">
          <label>Cidade:</label>
        </div>
        <Select
          isMulti
          className="input"
          options={cityOptions}
          name="n_cidade"
          id="i_cidade"
          onChange={(e) => handleCityChange(e)}
        />
      </form>
    </div>
  );
};
export default Destinos;
