import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getWeatherIcon } from '../../../constants/iconMapping';
import { toDateTime } from '../../../helper/functions';

export const WeekCard = React.memo(({ symbol, description, temp, day }) => {
  const { t } = useTranslation();

  const weekIndex = toDateTime(day);
  const weekArray = t('Week', { returnObjects: true });

  const weekFormated = weekArray[weekIndex].substring(0, 3);
  const tempFormated = parseFloat(temp).toFixed(0).padStart(2, '0') + '°';
  const icon = getWeatherIcon(symbol);

  return (
    <Card>
      <DataWrapper>
        <Symbol src={icon} alt={description} />
        <Temp id='temp'>{tempFormated}</Temp>
        <Day>{weekFormated}</Day>
      </DataWrapper>
    </Card>
  );
});

const Card = styled.div`
  position: relative;
  border: 1px solid #ececec1c;
  /* Glass effect*/
  background: rgba(125, 125, 125, 0.28);
  backdrop-filter: blur(17.7px);
  cursor: default;

  &:hover {
    z-index: 2;
    border: none;
    height: 110%;
    top: -10%;
    background: rgba(100, 100, 100, 0.15);
    filter: brightness(1.1) saturate(1.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    #temp {
      font-size: 1.9rem;
    }
  }
`;

const DataWrapper = styled.div`
  height: 100%;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  //Mobile
  @media (max-width: 767px) {
    flex-direction: row-reverse;
  }
`;

const Symbol = styled.img`
  opacity: 0.35;
  filter: invert(1);
  padding: 0.1rem;
  max-width: 3rem;
`;

const Temp = styled.p`
  font-size: 150%;
  margin-top: -1rem;

  //Mobile
  @media (max-width: 767px) {
    margin: 0;
  }
`;

const Day = styled.p`
  opacity: 0.35;
  font-size: 0.9rem;
  text-transform: uppercase;
`;
