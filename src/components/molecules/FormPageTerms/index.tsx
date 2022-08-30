import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useEffect, useState } from "react";

const FormPageTerms = ({ validation, setValidation }: any) => {
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    if (!terms) setValidation(false);
    else setValidation(true);
  }, [terms]);

  const handleChange = (e: any) => {
    setTerms(e.target.checked);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="term"
          id="term"
          onChange={handleChange}
          checked={terms}
        />
        <label htmlFor="term">
          Eu aceito todos os termos e condições de cadastro!
        </label>
      </div>
    </>
  );
};

export default FormPageTerms;
