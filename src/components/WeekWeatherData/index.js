import React from "react";
import styled from "styled-components";

export function WeekWeatherData() {
  return <Container>Week Weather Data</Container>;
}
const Container = styled.div`
  background-color: #fff;
  grid-area: 1 / 3 / 6 / 7;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 6 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
  }
`;
