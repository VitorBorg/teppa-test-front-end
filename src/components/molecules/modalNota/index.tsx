import * as S from "./styles";

import deleteNotas from "../../../hooks/notas/deleteNotas";
import { useEffect, useState } from "react";

const ModalNota = (nota: string) => {
  const handleClose = () => {
    //const res = deleteNotas(nota.id);
    console.log("handle");
  };

  return (
    <>
      <section>
        <h3>Modal</h3>
      </section>
    </>
  );
};

export default ModalNota;
