import React from "react";

import * as S from "./styled";

const index = ({ modalsClone, closeModal }) => {
  return (
    <S.WrapperModal>
      {modalsClone.map((item) => {
        console.log("modals imageFull: ", item);
        return (
          <>
            {item.show && (
              <>
                <S.ModalContent key={"modal" + item.id}>
                  <span onClick={() => closeModal(item.id)} className="close">
                    &times;
                  </span>
                  <figure>
                    <img src={item.imagefull} alt="teste" />
                    {/* <figcaption>5/8</figcaption> */}
                    <figcaption>
                      {item.id} / {modalsClone.length}
                    </figcaption>
                  </figure>
                </S.ModalContent>
              </>
            )}
          </>
        );
      })}
    </S.WrapperModal>
  );
};

export default index;
