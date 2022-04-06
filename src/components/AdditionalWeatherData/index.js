import React from "react";
import styled from "styled-components";

export function AdditionalWeatherData() {
  return <Container>Additional Weather Data</Container>;
}

const Container = styled.div`
  background-color: #fff;
  grid-area: 4 / 1 / 6 / 3;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 2 / 1 / 3 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
  }
`;
