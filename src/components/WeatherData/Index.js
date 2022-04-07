import React from "react";
import styled from "styled-components";

export function WeatherData(props) {
  return (
    <Container gridArea={props.gridArea}>
      <Value>
        <p>{props.value}</p>
      </Value>
      <Text>
        <h5>{props.text}</h5>
      </Text>
    </Container>
  );
}


const Container = styled.div`
grid-area: ${props => props.gridArea || '' };
padding:30px;
`;

const Value = styled.p`
  font-size: 25px;
  color: white;
  font-stretch: expanded;
`;

const Text = styled.h5`
  margin-top: 5px;
  font-size: 15px;
  color: var(--color-white);
  opacity: 0.5;
`;
