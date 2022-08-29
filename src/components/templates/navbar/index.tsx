import * as S from "./styles";
import { Link } from "react-router-dom";

import LogoIcon from "../../atoms/LogoIcon";

const Navbar = () => {
  return (
    <>
      <S.Container>
        <LogoIcon />
        <span>Teppa Test</span>
      </S.Container>
    </>
  );
};

export default Navbar;
