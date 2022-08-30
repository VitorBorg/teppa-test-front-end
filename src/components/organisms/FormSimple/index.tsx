import * as S from "./styles";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/contexts/useAuth";

const FormSimple = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { signInWithGoogle, signWithEmailPassword }: any = useAuth();

  const loginHandle = () => {
    signWithEmailPassword(data.email, data.password);
  };

  const passwordHandle = (e: any) => {
    setData({ ...data, password: e.target.value });
  };

  const emailHandle = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  return (
    <>
      <S.Container>
        <S.FormDiv>
          <S.access>
            <div>
              <Link to={`/Signup`}>Cadastrar</Link>
            </div>
            <div>
              <button onClick={signInWithGoogle}>Entrar com google</button>
            </div>
          </S.access>

          <h3>Sign In</h3>

          <S.Form>
            <input
              type="email"
              placeholder="Email"
              onChange={emailHandle}
              value={data.email}
            />

            <input
              type="password"
              placeholder="senha"
              onChange={passwordHandle}
              value={data.password}
            />
            <S.ButtonDiv>
              <S.buttonCadastrar onClick={loginHandle}>
                Fazer Login
              </S.buttonCadastrar>
            </S.ButtonDiv>
          </S.Form>
        </S.FormDiv>
      </S.Container>
    </>
  );
};

export default FormSimple;
