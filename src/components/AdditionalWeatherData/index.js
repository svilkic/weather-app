import React from 'react';
import styled from 'styled-components';
import { WeatherData } from '../WeatherData/Index';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export function AdditionalWeatherData(props) {
  const { t } = useTranslation();
  const { currentForecast } = useSelector((state) => state.weather);
  const { dew_point, humidity, visibility, uvi } = currentForecast;

  const humidityFormatted = `${humidity || 0}%`;
  const dewPointFormatted = `${Math.round(dew_point || 0)}°`;
  const uvIndexFormatted = `${Math.round(uvi || 0)}/10`;
  const visibilityFormatted = `${((visibility || 0) / 1000).toFixed(1)} km`;

  return (
    <Container>
      <DataGrid>
        <WeatherData
          value={humidityFormatted}
          text={t('Humidity')}
          gridArea={'1 / 1 / 2 / 2'}
        />
        <WeatherData
          value={uvIndexFormatted}
          text={t('UvIndex')}
          gridArea={'2 / 1 / 3 / 2'}
        />
        <WeatherData
          value={dewPointFormatted}
          text={t('DewPt')}
          gridArea={'1 / 2 / 2 / 3'}
        />
        <WeatherData
          value={visibilityFormatted}
          text={t('Visibility')}
          gridArea={' 2 / 2 / 3 / 3'}
        />
      </DataGrid>
    </Container>
  );
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

const DataGrid = styled.div`
  background: rgb(64, 101, 35);
  background: linear-gradient(
    45deg,
    rgb(34 119 68) 0%,
    rgb(51 153 120) 50%,
    rgb(76 170 137) 73%
  );
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 4 / 1 / 6 / 3;
  padding: 2rem;
  gap: 2rem;
  //Tablet
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-text: center;
    align-items: center;
  }

  //Mobile
  @media (max-width: 767px) {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-text: center;
  }
`;
