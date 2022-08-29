import Axios from "axios";

const deleteNotas = async (id: string) => {
  const url = `http://localhost:8098/nota/delete/${id}`;

  const res = await await Axios.delete(url, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("userToken"),
    },
  });
  return res;
};

export default deleteNotas;
