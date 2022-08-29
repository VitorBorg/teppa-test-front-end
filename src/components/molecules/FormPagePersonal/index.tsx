import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useEffect, useState } from "react";

const FormPagePersonal = ({ data, setData }) => {
  const handleName = (e: any) => {
    setData({ ...data, name: e.target.value });
  };

  const handleRole = (e: any) => {
    setData({ ...data, role: e.target.value });
  };

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Seu nome"
          value={data.name}
          onChange={(e) => handleName(e)}
        />
        <input
          list="Cargos"
          value={data.role}
          onChange={(e) => handleRole(e)}
        />

        <datalist id="Cargos">
          <option value="Gerente" />
          <option value="Auxiliar de gerência" />
        </datalist>
      </section>
    </>
  );
};

export default FormPagePersonal;
