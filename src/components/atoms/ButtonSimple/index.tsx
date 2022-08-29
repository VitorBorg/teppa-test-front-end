import * as S from "./styles";

const ButtonSimple = ({ nota, exec }) => {
  return (
    <>
      <button onClick={() => exec}>{nota}</button>
    </>
  );
};

export default ButtonSimple;
