import * as S from "./styles";

import { useEffect, useState } from "react";

import Message from "../../atoms/Message";

type dataForm = {
  email: "";
  password: "";
  passwordConfirmation: "";
};

const FormPageSign = ({ data, setData, setValidation }: any) => {
  const [validationEmail, setValidationEmail] = useState(false);
  const [validationPassword, setValidationPassword] = useState(false);
  const [validationConfirmPassword, setValidationConfirmPassword] =
    useState(false);

  const handleEmail = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e: any) => {
    setData({ ...data, password: e.target.value });
  };

  const handlePasswordConfirmation = (e: any) => {
    setData({ ...data, passwordConfirmation: e.target.value });
  };

  //
  function containsA(str: string) {
    return /[@]/.test(str);
  }

  function containsPoint(str: string) {
    return /[.]/.test(str);
  }

  //verificacoes do campo
  useEffect(() => {
    if (
      data.email.length < 5 ||
      !containsA(data.email) ||
      !containsPoint(data.email)
    )
      setValidationEmail(false);
    else setValidationEmail(true);

    if (data.password.length < 6) setValidationPassword(false);
    else setValidationPassword(true);

    if (data.password !== data.passwordConfirmation || data.password.length < 6)
      setValidationConfirmPassword(false);
    else setValidationConfirmPassword(true);
  }, [, data.email, data.password, data.passwordConfirmation]);

  //verificacao das verificacoes
  useEffect(() => {
    if (!validationEmail || !validationPassword || !validationConfirmPassword)
      setValidation(false);
    else setValidation(true);
  }, [validationEmail, validationPassword, validationConfirmPassword]);

  return (
    <>
      <S.Container>
        <div>
          {validationEmail === false ? (
            <Message type="warning" />
          ) : (
            <Message type="success" />
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={handleEmail}
            value={data.email}
          />
        </div>

        <div>
          {validationPassword === false ? (
            <Message type="warning" />
          ) : (
            <Message type="success" />
          )}{" "}
          <input
            type="password"
            placeholder="senha"
            onChange={handlePassword}
            value={data.password}
          />
        </div>

        <div>
          {validationConfirmPassword === false ? (
            <Message type="warning" />
          ) : (
            <Message type="success" />
          )}{" "}
          <input
            type="password"
            placeholder="confirmar senha"
            onChange={handlePasswordConfirmation}
            value={data.passwordConfirmation}
          />
        </div>

        {data.password !== data.passwordConfirmation && (
          <div>As senhas nao coincidem!</div>
        )}
      </S.Container>
    </>
  );
};

export default FormPageSign;
