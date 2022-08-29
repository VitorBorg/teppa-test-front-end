import { useContext } from "react";
import { AuthContext } from "../../context/auth";

import useDataGrid from "../contexts/useGridData";

const ListUpdated = () => {
  const { ListHasChanged } = useDataGrid();
  () => ListHasChanged();
  console.log("update");
};

export default ListUpdated;
