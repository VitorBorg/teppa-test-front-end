import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useEffect, useState } from "react";

const FormPageSign = ({ data, setData }: any) => {
  const handleEmail = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e: any) => {
    setData({ ...data, password: e.target.value });
  };

  const handlePasswordConfirmation = (e: any) => {
    setData({ ...data, passwordConfirmation: e.target.value });
  };

  return (
    <>
      <section>
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmail}
          value={data.email}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={handlePassword}
          value={data.password}
        />
        <input
          type="password"
          placeholder="confirmar senha"
          onChange={handlePasswordConfirmation}
          value={data.passwordConfirmation}
        />

        {data.password !== data.passwordConfirmation && (
          <div>As senhas nao coincidem!</div>
        )}
      </section>
    </>
  );
};

export default FormPageSign;
