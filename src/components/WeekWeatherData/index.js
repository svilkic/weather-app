import React, { useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { WeekCard } from './WeekCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCityLatLongImageUrban } from '../../helper/api';
import { fetchWeather, setImage } from '../../store/slices/weatherSlice';

const date = format(new Date(), 'dd MMMM');

export function WeekWeatherData() {
  const dispatch = useDispatch();

  const { cities, fetching, image, weekForecast } = useSelector(
    (state) => state.weather
  );

  const handleCitySelect = async (e) => {
    const urbanApi = e?.target?.value || e;
    const { lat, lon, image } = await getCityLatLongImageUrban(urbanApi);
    dispatch(setImage(image));
    dispatch(fetchWeather({ lat, lon }));
  };

  useEffect(() => {
    if (cities.length > 0) {
      handleCitySelect(cities[0].href);
    }
  }, [cities]);

  return (
    <Container img={image}>
      <DataSection className='CitySelect'>
        <select onChange={handleCitySelect}>
          {fetching && <option>Loading ...</option>}
          {cities.map((city) => (
            <option key={city.name} value={city.href}>
              {city.name}
            </option>
          ))}
        </select>
        <DateElement>{date}</DateElement>
      </DataSection>
      <WeekCards>
        {weekForecast?.map((forcast, i) =>
          i > 0 ? (
            <WeekCard
              symbol={forcast.weather[0].id}
              description={forcast.weather[0].description}
              temp={forcast.temp.day}
              day={forcast.dt}
            />
          ) : undefined
        )}
      </WeekCards>
      <GradiantBackdrop />
    </Container>
  );
}

const Container = styled.div`
  background-color: #38663a;
  grid-area: 1 / 3 / 6 / 7;
  justify-content: space-between;
  background: url(${(props) => props.img || ''});
  background-position: bottom;
  background-size: cover;
  filter: saturate(120%);
  filter: brightness(1.35);

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

const GradiantBackdrop = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(125, 125, 125, 0) 100%
  );
`;

const DataSection = styled.div`
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

const DateElement = styled.h3`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 100;
  margin-top: 1.12rem;
  opacity: 0.6;
`;

const WeekCards = styled.div`
  grid-area: 4 / 1 / 6 / 8;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: row;
  padding: 0 1px;

  //Mobile
  @media (max-width: 767px) {
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
