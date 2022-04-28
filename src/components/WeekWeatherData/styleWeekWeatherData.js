import styled from 'styled-components';
import { Dropdown } from '../UI/Dropdown';

export const Container = styled.div`
  overflow: hidden;
  grid-area: 1 / 3 / 6 / 7;
  justify-content: space-between;
  position: relative;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 6 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
    height: 95vh;
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const GradiantBackdrop = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(125, 125, 125, 0) 30%
  );
`;

export const DataSection = styled.div`
  grid-area: 1 / 1 / 4 / 8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  z-index: 2;

  //Mobile
  @media (max-width: 767px) {
    height: 50%;
  }
`;

export const DateElement = styled.h3`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 100;
  margin-top: 1.12rem;
  opacity: 0.85;
`;

export const WeekCards = styled.div`
  grid-area: 4 / 1 / 6 / 8;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: row;
  justify-content: space-evenly;

  & > div:nth-child(7) {
    border-right: none;
  }
  //Mobile
  @media (max-width: 767px) {
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DropdownBig = styled(Dropdown)`
  font-size: 50px;
`;

export const DropdownSmall = styled(Dropdown)`
  position: absolute;
  top: 10px;
  right: 10px;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
  }
`;
