import Axios from "axios";

const saveNota = async (data) => {
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
