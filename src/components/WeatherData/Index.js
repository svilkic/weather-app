import React from 'react';
import styled from 'styled-components';

export function WeatherData(props) {
  return (
    <Container gridArea={props.gridArea}>
      <Value>{props.value}</Value>
      <Text>{props.text}</Text>
    </Container>
  );
}

const Container = styled.div`
  grid-area: ${(props) => props.gridArea || ''};
  padding: 30px;
`;

const Value = styled.p`
  font-size: 25px;
  color: white;
  font-stretch: expanded;
`;

const Text = styled.h5`
  font-weight: 100;
  margin-top: 5px;
  font-size: 15px;
  color: var(--color-white);
  opacity: 0.7;
`;
