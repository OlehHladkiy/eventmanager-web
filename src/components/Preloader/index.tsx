import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

const Preloader = () => (
  <Preloader.Wrapper>
    <ImpulseSpinner loading />
  </Preloader.Wrapper>
);

Preloader.Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 2;
`;

export default Preloader;
