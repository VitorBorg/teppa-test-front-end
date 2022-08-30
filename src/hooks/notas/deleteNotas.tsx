import Axios from "axios";

const deleteNotas = async (id: string) => {
  const url = `https://teppa-test-backend.herokuapp.com/nota/delete/${id}`;

  const res = await await Axios.delete(url, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("userToken"),
    },
  });
  return res;
};

export default deleteNotas;
