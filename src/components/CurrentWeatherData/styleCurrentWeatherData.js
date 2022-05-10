import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 1 / 4 / 3;

  position: relative;
  background: rgb(80, 142, 155);
  background: linear-gradient(
    45deg,
    rgba(80, 142, 155, 1) 0%,
    rgba(32, 104, 119, 1) 27%,
    rgba(31, 123, 128, 1) 43%,
    rgba(83, 152, 137, 1) 69%,
    rgba(82, 148, 141, 1) 100%
  );

  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  padding: 2rem;
  overflow: hidden;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 1 / 1 / 2 / 7;
    padding: 1.5rem;
  }

  //Mobile
  @media (max-width: 767px) {
    padding: 1.5rem;
  }
`;

export const CurrentData = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  //Tablet
  @media (max-width: 1024px) {
    align-items: center;
    grid-area: 1 / 1 / 4 / 2;
  }
`;

export const RefreshContainer = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: flex;
  align-items: flex-end;
  z-index: 5;

  //Tablet
  @media (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Value = styled.h5`
  font-size: 40px;
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 19px;
  opacity: 0.9;
`;

export const Icon = styled.img`
  width: 100px;
  height: 90px;
  filter: invert(1);
`;

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
  color: white;
  background-color: transparent;
  animation-duration: 0.2s;
  outline: none;
  border: none;
  transition: all 500ms ease;
  transform: rotate(0);
  overflow: hidden;

  animation-name: rotate;
  animation-duration: 1ms;
  animation-fill-mode: backwards;
  animation-play-state: paused;

  svg.rotate {
    animation: rotate 1s;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Info = styled.span`
  font-weight: inherit;
  font-size: 15px;
  color: white;
  text-align: left;
  letter-spacing: 0.2;
  margin-left: 0.5rem;
  strong {
    font-weight: 600;
  }
  position: relative;
  top: 0;
  transition: top 300ms;

  &.reload {
    top: -20px;
  }
`;
