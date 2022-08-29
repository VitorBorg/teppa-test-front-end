import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useEffect, useState } from "react";

import FormPageNotaCnpj from "../../molecules/FormPageNotaCnpj";
import FormPageProduct from "../../molecules/FormPageNotaProduto";
import FormPageNotaQuantity from "../../molecules/FormPageNotaQuantity";

import saveNota from "../../../hooks/notas/saveNota";
import updateNota from "../../../hooks/notas/updateNota";
import useDataGrid from "../../../hooks/contexts/useGridData";

const FormMultiStepNota = () => {
  const [page, setPage] = useState(0);
  const [validation, setValidation] = useState(false);

  const FormTitles = ["Cnpj do comprador", "Produto", "Quantidade"];

  const [data, setData] = useState({
    idNota: "",
    cnpjCompra: "",
    idProduto: "",
    qntProduto: "",
  });

  const {
    changeComponentValue,
    checkDataUpdate,
    dataUpdate,
    finishedForm,
  }: any = useDataGrid();

  useEffect(() => {
    if (checkDataUpdate == 1) {
      setData(dataUpdate);
    }
  }, [, checkDataUpdate]);

  useEffect(() => {
    //console.log(data);
  }, [data]);

  const cancelNoteCreateHandle = () => {
    changeComponentValue(0);
  };

  const handleNext = () => {
    if (page < 2 && validation === true) setPage(page + 1);
  };

  const handlePreviously = () => {
    if (page > 0) setPage(page - 1);
    setValidation(true);
  };

  const changeButton =
    page == FormTitles.length - 1 ? (
      <S.buttonCadastrar
        disabled={validation === false}
        onClick={() => {
          alert("Nota cadastrada!");
          //verifica se esta cadastrando ou fazendo update

          {
            if (checkDataUpdate == 1) {
              updateNota({
                idNota: data.idNota,
                cnpjCompra: data.cnpjCompra,
                idProduto: data.idProduto,
                qntProduto: data.qntProduto,
              });
              finishedForm();
            } else {
              saveNota({
                cnpjCompra: data.cnpjCompra,
                idProduto: data.idProduto,
                qntProduto: data.qntProduto,
              });
            }
          }

          cancelNoteCreateHandle();
        }}
      >
        Cadastrar
      </S.buttonCadastrar>
    ) : (
      <S.buttonCadastrar onClick={handleNext} disabled={validation === false}>
        Avançar
      </S.buttonCadastrar>
    );

  const changePage = () => {
    if (page == 0) {
      return (
        <div>
          <FormPageNotaCnpj
            data={data}
            setData={setData}
            setValidation={setValidation}
            validation={validation}
          />
        </div>
      );
    } else if (page == 1) {
      return (
        <div>
          <FormPageProduct
            data={data}
            setData={setData}
            setValidation={setValidation}
            validation={validation}
          />
        </div>
      );
    } else if (page == 2) {
      return (
        <FormPageNotaQuantity
          data={data}
          setData={setData}
          setValidation={setValidation}
          validation={validation}
        />
      );
    }
  };

  return (
    <>
      <S.Container>
        <S.Progress>
          {page > 0 ? <S.ProgressDone /> : <S.ProgressWhite />}
          {page > 1 ? <S.ProgressDone /> : <S.ProgressWhite />}
          {page > 2 ? <S.ProgressDone /> : <S.ProgressWhite />}
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

export default FormMultiStepNota;
