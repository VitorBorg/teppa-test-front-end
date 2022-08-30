import Axios from "axios";

type dataUpdate = {
  idNota: string;
  cnpjCompra: string;
  idProduto: string;
  qntProduto: string;
};

const updateNota = async (data: dataUpdate) => {
  const url = `https://teppa-test-backend.herokuapp.com/nota/save/${data.idNota}`;

  const res = await await Axios.put(
    url,
    {
      cnpjCompra: data.cnpjCompra,
      idProduto: data.idProduto,
      qntProduto: data.qntProduto,
    },
    {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("userToken"),
      },
    }
  );

  //if(res.code === "404");

  return res;
};

export default updateNota;
