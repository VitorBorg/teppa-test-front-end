import Axios from "axios";

const updateNota = async (data) => {
  console.log("DATA UPDATE");
  console.log(data);
  const url = ` http://localhost:8098/nota/save/${data.idNota}`;

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
