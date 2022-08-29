import * as S from "./styles";

const TitleSubTitle = ({ nota }) => {
  return (
    <S.Container>
      <S.Content>
        <h1>
          <span>Gerenciador</span>
          <br />
          <span>de Notas Fiscais</span>
        </h1>
        <p>Gerenciador simples, rápido e fácil de usar!</p>
      </S.Content>
    </S.Container>
  );
};

export default TitleSubTitle;
