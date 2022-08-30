import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormSimple from "../../components/organisms/FormSimple";
import useAuth from "../../hooks/contexts/useAuth";
import * as S from "./styles";

const SignIn = () => {
  const navigate = useNavigate();
  const { auth }: any = useAuth();

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") {
      navigate("/home");
    }
  }, [auth]);

  return (
    <S.Container>
      <FormSimple />
    </S.Container>
  );
};

export default SignIn;
