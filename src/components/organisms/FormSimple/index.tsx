import * as S from "./styles";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/contexts/useAuth";

const FormSimple = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    role: "",
  });

  const { auth, userToken, signInWithGoogle, signout }: any = useAuth();

  //console.log(auth);

  return (
    <>
      <S.Container>
        <S.FormDiv>
          <h3>Sign In</h3>
          <div>
            {auth ? (
              <button onClick={signout}>Sair</button>
            ) : (
              <Link to={`/Signup`}>Cadastrar</Link> && (
                <button onClick={signInWithGoogle}>Entrar com google</button>
              )
            )}
          </div>
        </S.FormDiv>
      </S.Container>
    </>
  );
};

export default FormSimple;
