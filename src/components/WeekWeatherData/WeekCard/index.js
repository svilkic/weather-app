import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { weatherIconMap } from '../../../constants/iconMapping';
import { toDateTime } from '../../../helper/functions';

export const WeekCard = React.memo(({ symbol, description, temp, day }) => {
  const { t } = useTranslation();

  const weekIndex = toDateTime(day);
  const weekArray = t('Week', { returnObjects: true });

  const weekFormated = weekArray[weekIndex].substring(0, 3);
  const tempFormated = parseFloat(temp).toFixed(0) + '°';
  const icon = weatherIconMap[symbol];

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
  cursor: pointer;
  border: 0.1px solid rgba(255, 255, 255, 0.1);

  /* Glass effect*/
  background: rgba(125, 125, 125, 0.28);
  backdrop-filter: blur(15.7px);
  -webkit-backdrop-filter: blur(7.7px);

  &:hover {
    border-right: none;
    height: 110%;
    top: -10%;
    background: rgba(180, 180, 180, 0.28);
    filter: saturate(150%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    flex-direction: unset;
  }
`;

const Symbol = styled.img`
  padding: 0 0.8rem;
  opacity: 0.5;
  filter: invert(1);
`;

const Temp = styled.div`
  font-size: 2rem;
  margin-top: -1rem;
`;

const Day = styled.p`
  opacity: 0.5;
  font-size: 0.9rem;
  text-transform: uppercase;
`;
