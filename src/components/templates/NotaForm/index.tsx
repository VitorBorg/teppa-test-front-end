import * as S from "./styles";
import { useEffect, useState } from "react";
import useDataGrid from "../../../hooks/contexts/useGridData";

import FormMultiStepNota from "../../organisms/FormMultiStepNota";

const NotaForm = () => {
  const { changeComponentValue, finishedForm } = useDataGrid();

  const cancelNoteCreateHandle = () => {
    changeComponentValue(0);
    finishedForm();
  };

  return (
    <>
      <S.Container>
        <FormMultiStepNota />
        <S.Button onClick={cancelNoteCreateHandle}>Cancelar</S.Button>
      </S.Container>
    </>
  );
};

export default NotaForm;
