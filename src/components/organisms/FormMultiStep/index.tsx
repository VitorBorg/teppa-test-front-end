import * as S from "./styles";

import { useState } from "react";
import FormPageTerms from "../../molecules/FormPageTerms";
import FormPageSign from "../../molecules/FormPageSign";
import useAuth from "../../../hooks/contexts/useAuth";

const FormMultiStep = () => {
  const [page, setPage] = useState(0);
  const [validation, setValidation] = useState(false);

  const { signWithEmail }: any = useAuth();

  const FormTitles = ["Dados", "Termos"];

  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleNext = () => {
    if (page < 1) setPage(page + 1);
  };

  const handlePreviously = () => {
    if (page > 0) setPage(page - 1);
  };

  const changeButton =
    page == FormTitles.length - 1 ? (
      <S.buttonCadastrar
        disabled={!validation}
        onClick={() => {
          alert("Enviado!");
          signWithEmail({
            email: data.email,
            password: data.password,
          });
        }}
      >
        Cadastrar
      </S.buttonCadastrar>
    ) : (
      <S.buttonCadastrar onClick={handleNext} disabled={!validation}>
        Avançar
      </S.buttonCadastrar>
    );

  const changePage = () => {
    if (page == 0) {
      return (
        <div>
          <FormPageSign
            data={data}
            setData={setData}
            setValidation={setValidation}
          />
        </div>
      );
    } else if (page == 1) {
      return (
        <div>
          <FormPageTerms
            setValidation={setValidation}
            validation={validation}
          />
        </div>
      );
    }
  };

  return (
    <>
      <S.Container>
        <S.Progress>
          {page > 0 ? <S.ProgressDone /> : <S.ProgressWhite />}
          {page > 1 ? <S.ProgressDone /> : <S.ProgressWhite />}
        </S.Progress>

        <S.FormDiv>
          <h3>{FormTitles[page]}</h3>
          <div>{changePage()}</div>

          <S.ButtonDiv>
            <button onClick={handlePreviously} disabled={page == 0}>
              Voltar
            </button>
            {changeButton}
          </S.ButtonDiv>
        </S.FormDiv>
      </S.Container>
    </>
  );
};

export default FormMultiStep;
