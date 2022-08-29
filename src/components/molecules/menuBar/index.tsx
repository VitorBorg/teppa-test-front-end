import ButtonSimple from "../../atoms/ButtonSimple";
import TitleSubTitle from "../../atoms/TitleSubTitle";
import * as S from "./styles";

import AddIcon from "../../atoms/AddIcon";
import useAuth from "../../../hooks/contexts/useAuth";

import useDataGrid from "../../../hooks/contexts/useGridData";
import { useEffect } from "react";

const MenuBar = () => {
  const { signout } = useAuth();
  const { changeComponentValue } = useDataGrid();

  const createNoteHandle = () => {
    changeComponentValue(1);
  };

  return (
    <S.SectionContent>
      <TitleSubTitle />
      <S.DivFather>
        <S.DivContent>
          <div>
            <button onClick={createNoteHandle}>Criar nota</button>
            {/* 
            <button onClick={() => console.log("que voz de sono")}>
              Filtros
            </button>
            */}
          </div>
          <div>
            <button onClick={signout}>Sair</button>
          </div>
        </S.DivContent>
      </S.DivFather>
    </S.SectionContent>
  );
};

export default MenuBar;
