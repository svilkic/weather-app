import React, { useState } from "react";
import styled from "styled-components";

import { BsSun } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { useTranslation } from "react-i18next";

export function CurrentWeatherData() {
  const { t } = useTranslation();
  const {active, setActive}=useState(false);
  return (
    <Container>
      <DayData>
        <Temperature>
          <Value>
            <h5>30°</h5>
          </Value>
          <Text>
            <p>{t("Sunny")}</p>
          </Text>
        </Temperature>
        <Animation>
          <BsSun />
        </Animation>
      </DayData>
      <ButtonContainer>
        <RefreshButton active={active} onClick={() => setActive(!active)}>
          <MdRefresh />
        </RefreshButton>
        <Info>{t("Updated")}</Info>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
position:relative;
  background: rgb(80, 142, 155);
  background: linear-gradient(
    60deg,
    rgba(80, 142, 155, 1) 0%,
    rgba(32, 104, 119, 1) 27%,
    rgba(31, 123, 128, 1) 43%,
    rgba(83, 152, 137, 1) 69%,
    rgba(82, 148, 141, 1) 100%
  );
  grid-area: 1 / 1 / 4 / 3;
  width: 100%;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 1 / 1 / 2 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
  }
`;

const DayData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
 
`;
const Temperature = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const Value = styled.h5`
font-size:50px;
font-family: 'Trebuchet MS' , sans-serif;
font-weight:600;


`;

const Text = styled.div`
  font-size: 19px;
  opacity: 0.9;
`;

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const Animation = styled.div`

  font-size: 55px;
  color: white;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 35px;
  position:absolute;
  left:0;
  bottom:0;


`;

const RefreshButton = styled.div`
  cursor: pointer;
  font-size: 22px;
  color: white;
  opacity: 0.9;
  background-color: transparent;
  animation-duration: 0.2s;
  outline: none;
  border: none;
`;

const Info = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: white;
  letter-spacing: 0.2;
  opacity: 0.6;
  margin-left: 10px;
  margin-bottom: 5px;
`;
