// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

// component

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Background = styled.div`
  background-color: #fff;
  border-radius: 3px;

  width: 35px;
  height: 35px;

  cursor: pointer;
`;

const Label = styled.span`
  font-size: 10px;
  color: #fff;

  margin-top: 3px;
`;

const Button = props => {
  return (
    <Container>
      <Background />
      <Label>{props.label || ''}</Label>
    </Container>
  );
};

export default Button;
