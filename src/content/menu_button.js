// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

const fastLoremIpsum = require('fast-lorem-ipsum');

// component

const Container = styled.div`
  background-color: #f8f9fa;

  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #e9ecef;
  }

  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;

  font-size: 12px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;

  position: relative;

  user-select: none;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Summary = styled.div`
  margin-top: 10px;
`;

const CurrentMarker = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff;
  transform: rotate(45deg);

  position: relative;
  right: -50px;

  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const CurrentMarkerContainer = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  z-index: 0;

  ${({ isCurrent }) => {
    return `visibility: ${isCurrent ? 'visible' : 'collapse'};`;
  }};
`;

const Content = styled.div`
  z-index: 2;
  position: relative;
`;

const MenuButton = props => {
  const { isCurrent, title, onClick } = props;

  return (
    <Container onClick={onClick}>
      <CurrentMarkerContainer isCurrent={isCurrent}>
        <CurrentMarker />
      </CurrentMarkerContainer>

      <Content>
        <Title>{title}</Title>
        <Summary>{fastLoremIpsum(50, 'w')}</Summary>
      </Content>
    </Container>
  );
};

export default MenuButton;
