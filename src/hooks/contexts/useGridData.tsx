import { useContext } from "react";
import { DataGridContext } from "../../context/dataGrid";

const useDataGrid = () => {
  const context = useContext(DataGridContext);

  return context;
};

export default useDataGrid;
