import { createContext, useState } from "react";

export const DataGridContext = createContext({});

export const DataGridProvider = ({ children }: any) => {
  //para atualizar o grid quando alguma mudanca ocorrer (delete)
  const [updateList, setUpdateList] = useState(false);
  const [componentValue, setComponentValue] = useState(0);

  //para carregar os dados no form para update
  const [checkDataUpdate, setCheckDataUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    idNota: "",
    cnpjCompra: "",
    idProduto: "",
    qntProduto: "",
  });

  //form update
  const editForm = (data: any) => {
    setDataUpdate({
      idNota: data.id,
      cnpjCompra: data.cnpj,
      idProduto: data.idProduto,
      qntProduto: data.qnt,
    });
    setCheckDataUpdate(true);
  };

  const finishedForm = () => {
    setCheckDataUpdate(false);
  };

  //grid
  const ListHasChanged = () => {
    setUpdateList(!updateList);
  };

  const changeComponentValue = (value: number) => {
    setComponentValue(value);
  };

  return (
    <DataGridContext.Provider
      value={{
        updateList,
        componentValue,
        ListHasChanged,
        changeComponentValue,
        checkDataUpdate,
        dataUpdate,
        editForm,
        finishedForm,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
};
