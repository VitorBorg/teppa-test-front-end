import { useEffect, useState } from "react";
import useAuth from "../../hooks/contexts/useAuth";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Grid from "../../components/organisms/grid";
import NotaForm from "../../components/templates/NotaForm";
import MenuBar from "../../components/molecules/menuBar";

import useDataGrid from "../../hooks/contexts/useGridData";

const Home = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { componentValue, checkDataUpdate } = useDataGrid();

  const [component, setComponent] = useState(1);

  useEffect(() => {
    if (component == 0) setComponent(1);
    else setComponent(0);
  }, [componentValue]);

  useEffect(() => {
    if (checkDataUpdate == true) setComponent(1);
    else setComponent(0);
  }, [checkDataUpdate]);

  useEffect(() => {
    if (window.localStorage.getItem("auth") !== "true") {
      navigate("/");
    }
  }, [auth]);

  return (
    <>
      <MenuBar />
      {component == 0 ? <Grid /> : <NotaForm />}
    </>
  );
};

export default Home;
