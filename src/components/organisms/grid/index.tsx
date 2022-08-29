import * as S from "./styles";
import CardNota from "../../molecules/cardNota";

import getAllNotas from "../../../hooks/notas/getAllNotas";
import { useEffect, useState } from "react";

import useAuth from "../../../hooks/contexts/useAuth";
import useDataGrid from "../../../hooks/contexts/useGridData";

type dataNota = {
  id: string;
  cnpjCompra: string;
  idProduto: string;
  qntProduto: string;
  dateTime: string;
};

const Grid = () => {
  const [data, setData] = useState([]);
  const { signout }: any = useAuth();
  const { updateList }: any = useDataGrid();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const fetch = await getAllNotas();

        console.log(fetch);
        if (fetch?.code === "404") signout();

        setData(fetch);
      } catch (e) {
        console.log(e);
      }
    };

    dataFetch();

    console.log(data?.length);
  }, [, updateList]);

  return (
    <>
      <S.Container>
        <S.ContainerUl>
          {data?.map((nota: dataNota) => (
            <li key={nota.id}>
              <CardNota
                id={nota?.id}
                idProduto={nota?.idProduto}
                qnt={nota?.qntProduto}
                date={nota?.dateTime}
                cnpj={nota?.cnpjCompra}
              />
            </li>
          ))}
        </S.ContainerUl>
      </S.Container>
    </>
  );
};

export default Grid;
