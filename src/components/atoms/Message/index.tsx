import * as S from "./styles";

const Message = (type: string) => {
  return (
    <S.Content>
      {type.type === "warning" ? (
        <S.spanWarning></S.spanWarning>
      ) : (
        <S.spanSuccess></S.spanSuccess>
      )}
    </S.Content>
  );
};

export default Message;
