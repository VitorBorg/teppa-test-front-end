import * as S from "./styles";

import { useEffect, useState } from "react";
import Message from "../../atoms/Message";

const FormPageNotaCnpj = ({ data, setData, setValidation, validation }) => {
  //const [verification, setVerification] = useState(false);

  const handleCNPJ = (e: any) => {
    setData({ ...data, cnpjCompra: e.target.value });
  };

  //verificacoes do campo
  useEffect(() => {
    //deveria verificar quantos pontos existem na string
    if (data.cnpjCompra.length !== 14 || containsAnyLetter(data.cnpjCompra))
      setValidation(false);
    else setValidation(true);
  }, [data.cnpjCompra]);

  function containsAnyLetter(str: string) {
    return /[a-zA-Z]/.test(str);
  }

  return (
    <>
      <S.Container>
        {validation === false ? (
          <Message type="warning" />
        ) : (
          <Message type="success" />
        )}

        <input
          type="text"
          placeholder="CNPJ do comprador"
          onChange={handleCNPJ}
          value={data.cnpjCompra}
        />
      </S.Container>
    </>
  );
};

export default FormPageNotaCnpj;
