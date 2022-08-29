import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useState } from "react";
import FormPageTerms from "../../molecules/FormPageTerms";
import FormPagePersonal from "../../molecules/FormPagePersonal";
import FormPageSign from "../../molecules/FormPageSign";

const FormMultiStep = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ["Sign data", "Personal Info", "Terms"];

  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    role: "",
  });

  const [terms, setTerms] = useState(false);

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  const handlePreviously = () => {
    if (page > 0) setPage(page - 1);
  };

  const changeButton =
    page == FormTitles.length - 1 ? (
      <button
        disabled={!terms}
        onClick={() => {
          alert("Enviado!");
          //API POST
        }}
      >
        Cadastrar
      </button>
    ) : (
      <button
        onClick={handleNext}
        disabled={data.password !== data.passwordConfirmation}
      >
        Avançar
      </button>
    );

  const changePage = () => {
    if (page == 0) {
      return (
        <div>
          <FormPageSign data={data} setData={setData} />
        </div>
      );
    } else if (page == 1) {
      return (
        <div>
          <FormPagePersonal data={data} setData={setData} />
        </div>
      );
    } else if (page == 2) {
      return <FormPageTerms terms={terms} setTerms={setTerms} />;
    }
  };

  return (
    <>
      <S.Container>
        <S.FormDiv>
          <h3>{FormTitles[page]}</h3>
          <div>{changePage()}</div>

          <div>
            <button onClick={handlePreviously} disabled={page == 0}>
              Voltar
            </button>
            {changeButton}
          </div>
        </S.FormDiv>
      </S.Container>
    </>
  );
};

export default FormMultiStep;
