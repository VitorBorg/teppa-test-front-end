import * as S from "./styles";
import { useEffect } from "react";
import Message from "../../atoms/Message";

const FormPageNotaQuantity = ({
  data,
  setData,
  setValidation,
  validation,
}: any) => {
  const handleQuantity = (e: any) => {
    setData({ ...data, qntProduto: e.target.value });
  };

  //verificacoes do campo
  useEffect(() => {
    if (data.qntProduto == 0) setValidation(false);
    else setValidation(true);
  }, [data.qntProduto]);

  return (
    <>
      <S.Container>
        {validation === false ? (
          <Message type="warning" />
        ) : (
          <Message type="success" />
        )}

        <input
          type="number"
          placeholder="Quantidade"
          onChange={handleQuantity}
          value={data.qntProduto}
        />
      </S.Container>
    </>
  );
};

export default FormPageNotaQuantity;
