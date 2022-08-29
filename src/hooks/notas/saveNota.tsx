import Axios from "axios";

type dataUpdate = {
  cnpjCompra: string;
  idProduto: string;
  qntProduto: string;
};

const saveNota = async (data: dataUpdate) => {
  const url = "http://localhost:8098/nota/save";

  const res = await await Axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("userToken"),
    },
  });

  //if(res.code === "404");

  return res;
};

export default saveNota;
