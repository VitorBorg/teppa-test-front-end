import * as S from "./styles";

const ButtonSimple = ({ nota, exec }: any) => {
  return (
    <>
      <button onClick={() => exec}>{nota}</button>
    </>
  );
};

export default ButtonSimple;
