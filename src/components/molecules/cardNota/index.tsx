import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";

import DeleteIcon from "../../atoms/DeleteIcon";
import useDataGrid from "../../../hooks/contexts/useGridData";

type dataNota = {
  cnpj: string;
  date: string;
  id: string;
  idProduto: string;
  qnt: string;
};

const CardNota = (nota: dataNota) => {
  const { ListHasChanged, editForm }: any = useDataGrid();

  const handleDelete = () => {
    deleteNotas(nota.id);
    {
      ListHasChanged();
    }
  };

  const handleEdit = () => {
    {
      editForm(nota);
    }
  };

  return (
    <S.Container>
      <div>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      <S.Content>
        <S.title>Nota Fiscal</S.title>
        <S.date>{nota.date}</S.date>

        <S.Data>
          <S.Info>
            {" "}
            <strong>Comprador</strong>
            <p>{nota.cnpj}</p>
          </S.Info>

          <S.Info>
            {" "}
            <strong>Produto</strong>
            <p>{nota.idProduto}</p>
          </S.Info>
          <S.Info>
            {" "}
            <strong>Quantidade</strong>
            <p>{nota.qnt}</p>
          </S.Info>
        </S.Data>
      </S.Content>
    </S.Container>
  );
};

export default CardNota;
