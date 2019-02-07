import React from "react";

import styled from "styled-components";
import './Modal.css'
const BackDrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  min-width: 30vw;
  min-height: 40vh;
  z-index: 301;
  border-radius: 4px;
  cursor: auto;
`;
const Modal = props => {
  return (
    <BackDrop
      onClick={event => {
        event.stopPropagation();
        props.close();
      }}
    >
        <Content onClick={event => event.stopPropagation()}>
          {props.children}
        </Content>
    </BackDrop>
  );
};

export default Modal;
