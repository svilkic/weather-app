import React from "react";
import styled from "styled-components";

export function CurrentWeatherData() {
  return <Container>Current Wather Data</Container>;
}
const Container = styled.div`
  background-color: #fff;
  grid-area: 1 / 1 / 4 / 3;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 1 / 1 / 2 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
  }
`;
