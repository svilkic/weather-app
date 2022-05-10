import React from 'react';
// Style
import styled from 'styled-components';
// Components
import { AdditionalWeatherData } from '../AdditionalWeatherData';
import { CurrentWeatherData } from '../CurrentWeatherData';
import { WeekWeatherData } from '../WeekWeatherData';

export function Container() {
  return (
    <ContainerDiv>
      <CurrentWeatherData />
      <AdditionalWeatherData />
      <WeekWeatherData />
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  height: 70%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  overflow: hidden;

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 80%;
    width: 80%;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
    height: 95%;
    width: 95%;
  }
`;
