import React from "react";

import styled from "styled-components";

const SideDrawer = props => {
  const BackDrop = styled.div`
    position: fixed;
    display:${props.show ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    z-index: 500;
    transition:.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.6);
  `;
  return <BackDrop onClick={props.close} />;
};

export default SideDrawer;
