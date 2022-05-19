import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Spinner } from '../../UI/Spinner';
import { Background } from '../styleWeekWeatherData';

export const ImageBackground = ({ fetching, url }) => {
  const [longFetching, setLongFetching] = useState(false);

  useEffect(() => {
    let timeOut = null;
    if (fetching) {
      timeOut = setTimeout(() => {
        setLongFetching(true);
      }, 1000);
    } else {
      clearTimeout(timeOut);
      setLongFetching(false);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [fetching]);

  return (
    <>
      <SwitchTransition mode='in-out'>
        <CSSTransition key={url} timeout={1000} classNames='fade'>
          <BackgroundImage img={url} />
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition key={longFetching} classNames='fade' timeout={1000}>
          <>
            {longFetching && (
              <SpinnerDiv>
                <Spinner />
              </SpinnerDiv>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

const BackgroundImage = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${Background}
  @media (min-width: 767px) {
    background: url(${(props) => props.img || ''});
    filter: brightness(1.1) saturate(1.1) contrast(1.1);
    background-size: cover;
    background-position: bottom;
  }
`;

const SpinnerDiv = styled.span`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    margin-top: -2rem;
  }
`;
