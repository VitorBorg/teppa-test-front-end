import * as S from "./styles";
import { useEffect } from "react";
import Message from "../../atoms/Message";

const FormPageProduct = ({ data, setData, setValidation, validation }: any) => {
  const handleProduct = (e: any) => {
    setData({ ...data, idProduto: e.target.value });
  };

  //verificacoes do campo
  useEffect(() => {
    if (data.idProduto == "") setValidation(false);
    else setValidation(true);
  }, [data.idProduto]);

  return (
    <>
      <S.Container>
        {validation === false ? (
          <Message type="warning" />
        ) : (
          <Message type="success" />
        )}

        <input
          list="products"
          value={data.idProduto}
          placeholder="selecione o produto"
          onChange={(e) => handleProduct(e)}
        />

        <datalist id="products">
          <option value="Produto exemplo 1" />
          <option value="Produto exemplo 2" />
          <option value="Produto exemplo 3" />
        </datalist>
      </S.Container>
    </>
  );
};

export default FormPageProduct;
