import { useContext } from "react";
import { AuthContext } from "../../context/auth";

import useDataGrid from "../contexts/useGridData";

const ListUpdated = () => {
  const { ListHasChanged }: any = useDataGrid();
  () => ListHasChanged();
};

export default ListUpdated;
