import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

export const SpinnerType = {
  Dark: {
    frontColor: '#1890FF',
    backColor: '#F4F8FD',
  },
  Light: {
    frontColor: '#F4F8FD',
    backColor: '#397DD2',
  },
};

type SpinnerProps = {
  style?: Record<string, any>;
};

const Spinner = ({ style = SpinnerType.Dark }: SpinnerProps) => (
  <Spinner.Wrapper>
    <ImpulseSpinner {...style} />
  </Spinner.Wrapper>
);

Spinner.Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0 50px;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
