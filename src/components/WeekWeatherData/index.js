import React from "react";
import styled from "styled-components";
import { Dropdown } from "../UI/Dropdown";


const city = [{
  id: '1',
  name: 'NORWAY'
},
{
  id: '2',
  name: 'BELGRADE'
},

{
  id: '3',
  name: 'FRANCE'
},

{
  id: '4',
  name: 'SAD'
},

];


export function WeekWeatherData() {
  return <Container>
    <Dropdown list = {city} onSelect = {(item) => console.log(item)} fontSize={'50px'} />
  </Container>;
}
const Container = styled.div`
  background-color: grey;
  grid-area: 1 / 3 / 6 / 7;

  //Tablet
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 6 / 7;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
  }
`;
