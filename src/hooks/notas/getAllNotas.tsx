import Axios from "axios";

const getAllNotas = async () => {
  const url = "https://teppa-test-backend.herokuapp.com/nota/all";

  const res = await (
    await Axios.get(url, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("userToken"),
      },
    })
  ).data;

  //if(res.code === "404");
  //console.log("AAAAAAAAAAAAA");
  //console.log(res);

  return res;
};

export default getAllNotas;
