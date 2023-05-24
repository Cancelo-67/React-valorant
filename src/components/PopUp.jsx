import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

const Popup = ({ isOpen, onClose, text }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody borderRadius={"3px"}>
          {/* Contenido del Popup */}
          <p>{text}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Popup;
