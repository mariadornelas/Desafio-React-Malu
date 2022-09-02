import React from "react";

import { ModalOverlay, DeleteModalContainer, PreviewModalContainer, Button } from "./modal-style";


function Modal(props) {

  function confirm() {
    // código para remoção do item
    props.setShowModal(false);
  }

  if(props.showModal === true && props.modalType === "delete") {
    return (
      <ModalOverlay>
        <DeleteModalContainer>
          <p>Tem certeza de que deseja excluir esse item?</p>

          <div className="buttonsContainer">
            <Button onClick={confirm} primary >Excluir</Button>
            <Button onClick={() => props.setShowModal(false)} >Cancelar</Button>
          </div>
        </DeleteModalContainer>
      </ModalOverlay>
    );
  } else if(props.showModal === true && props.modalType === "preview") {
    return (
      <ModalOverlay>
        <PreviewModalContainer>
          <div onClick={() => props.setShowModal(false)}></div>
        </PreviewModalContainer>
      </ModalOverlay>
    );
  } else {
    return null;
  }
};

export default Modal;