import React from 'react';
import styled from 'styled-components';

export function WeekCard({ symbol, temp, day }) {
  return (
    <Card>
      <DataWrapper>
        <Symbol>{symbol}</Symbol>
        <Temp>{temp}</Temp>
        <Day>{day}</Day>
      </DataWrapper>
    </Card>
  );
}

const Card = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-right: 1px solid rgba(125, 125, 125, 0.3);

  /* Glass effect*/
  background: rgba(100, 100, 100, 0.28);
  backdrop-filter: blur(15.7px);
  -webkit-backdrop-filter: blur(7.7px);

  &:hover {
    height: 110%;
    top: -10%;
    background: rgba(180, 180, 180, 0.28);
    filter: saturate(150%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

const Symbol = styled.span`
  opacity: 0.7;
`;

const Temp = styled.div`
  font-size: 1.5rem;
`;

const Day = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
  text-transform: uppercase;
`;
