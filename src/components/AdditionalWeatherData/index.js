import React from "react";
import styled from "styled-components";
import { WeatherData } from "../WeatherData/Index";
import { useTranslation } from "react-i18next";

export function AdditionalWeatherData(props) {

  const { t } = useTranslation();
  
  return (
    <Container>
      <DataGrid>
        <WeatherData
          value={"87%"}
          text={t("Humidity")}
          gridArea={"1 / 1 / 2 / 2"}
        />
        <WeatherData
          value={"0/10"}
          text={t("UvIndex")}
          gridArea={"2 / 1 / 3 / 7"}
        />
        <WeatherData
          value={"25°"}
          text={t("DewPt")}
          gridArea={"1 / 2 / 2 / 3"}
        />
        <WeatherData
          value={"3.0 km"}
          text={t("Visibility")}
          gridArea={" 2 / 2 / 3 / 3"}
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
    60deg,
    rgba(64, 101, 35, 1) 0%,
    rgba(84, 152, 134, 1) 100%
  );
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 4 / 1 / 6 / 3;

  //Tablet
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-text: center;
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
