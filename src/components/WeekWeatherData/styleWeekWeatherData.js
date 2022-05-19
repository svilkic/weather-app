import styled, { css } from 'styled-components';
import { Dropdown } from '../UI/Dropdown';

export const Background = css`
  //Background Gradient
  background: rgb(80, 142, 155);
  background: linear-gradient(
    45deg,
    rgba(80, 142, 155, 1) 0%,
    rgba(32, 104, 119, 1) 27%,
    rgba(31, 123, 128, 1) 43%,
    rgba(83, 152, 137, 1) 69%,
    rgba(82, 148, 141, 1) 100%
  );
`;

const showAndHideAnimation = css`
  @keyframes show {
    0% {
      opacity: 0;
      visibility: hidden;
      height: 0;
      padding: 0;
    }

    100% {
      opacity: 100%;
      visibility: visible;
      max-height: 100%;
    }
  }
  @keyframes hide {
    0% {
      opacity: 100%;
      max-height: 100%;
      padding: 2rem;
    }

    100% {
      visibility: hidden;
      max-height: 0;
      padding: 0;
    }
  }
`;

export const Container = styled.div`
  overflow: hidden;
  grid-area: 1 / 3 / 6 / 7;
  justify-content: space-between;
  position: relative;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  scroll-snap-align: start;

  ${Background}

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 6 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
    grid-template-rows: repeat(1, 1fr);
    grid-area: week;
    display: flex;
    flex-direction: column;
    gap: 0;
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
  z-index: 3;

  //Mobile
  @media (max-width: 767px) {
    height: 50%;

    &.show {
      animation-name: show;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      padding: 2rem;
      opacity: 1;
    }
    &.hide {
      animation-name: hide;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }

  ${showAndHideAnimation}
`;

export const DateElement = styled.h3`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 100;
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
    margin-bottom: 20px;
    gap: 1px;
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
`;

export const CitySelectSection = styled.div`
  grid-area: select;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //Desktop
  @media (min-width: 767px) {
    display: none;
  }

  &.background {
    ${Background}
    padding: 1rem;
  }
`;
