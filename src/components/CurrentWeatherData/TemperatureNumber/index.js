import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export function TemperatureNumber({ value }) {
  var firstNumber = Math.floor(value / 10);
  var secondNumber = value % 10;

  return (
    <TemperatureWrapper>
      {firstNumber !== 0 && (
        <SwitchTransition>
          <CSSTransition
            key={firstNumber}
            classNames='numberChange'
            timeout={200}
          >
            <Value>{firstNumber}</Value>
          </CSSTransition>
        </SwitchTransition>
      )}
      <SwitchTransition>
        <CSSTransition
          key={secondNumber}
          classNames='numberChange'
          timeout={200}
        >
          <Value>{secondNumber}</Value>
        </CSSTransition>
      </SwitchTransition>
      <Value>°</Value>
    </TemperatureWrapper>
  );
}

const TemperatureWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 3rem;
`;

export const Value = styled.h5`
  font-size: 40px;
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: 400;

  &::after {
    display: flex;
    content: '${(props) => props.newValue}';
  }
`;
