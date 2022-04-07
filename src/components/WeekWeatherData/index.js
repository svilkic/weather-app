import React from 'react';
import styled from 'styled-components';
import { format, formatRelative, subDays } from 'date-fns';
import { srLatn, ru } from 'date-fns/locale';
import { WeekCard } from './WeekCard';

const date = format(new Date('03-03-2022'), 'dd MMMM');

export function WeekWeatherData() {
  return (
    <Container>
      <TopDiv className='CitySelect'>
        <DropdownBig>
          <Dropdown list={cities} onSelect={(item) => console.log(item)} />
        </DropdownBig>
        <DateElement>{date}</DateElement>
      </TopDiv>
      <WeekForcast>
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
        <WeekCard symbol='-' temp='21' day='fri' />
      </WeekForcast>
    </Container>
  );
}
const Container = styled.div`
  background-color: #38663a;
  grid-area: 1 / 3 / 6 / 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url('https://ak.picdn.net/shutterstock/videos/11138207/thumb/1.jpg');
  background-size: cover;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 6 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
    height: 95vh;
  }
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  //Mobile
  @media (max-width: 767px) {
    height: 50%;
  }
`;

const DateElement = styled.h3`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 100;
  margin-top: 1.12rem;
  opacity: 0.8;
`;

const WeekForcast = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: row;
  height: 40%;
  gap: 1pt;

  //Mobile
  @media (max-width: 767px) {
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DropdownBig = styled(Dropdown)`
  font-size: 50px;
`;
