import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { WeekCard } from './WeekCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCityLatLongImageUrban } from '../../helper/api';
import { LANGUAGES } from '../../constants/language';
import i18next from 'i18next';

import { getLocalLanguage, handleLanguageChange } from '../../helper/functions';
import {
  fetchWeather,
  setFetchingImage,
  setImage,
} from '../../store/slices/weatherSlice';
import { Dropdown } from '../UI/Dropdown';
import { enUS, srLatn } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { ImageBackground } from './ImageBackground';
import {
  Container,
  DataSection,
  DropdownBig,
  DateElement,
  GradiantBackdrop,
  WeekCards,
  DropdownSmall,
  CitySelectSection,
} from './styleWeekWeatherData';
import { useInView } from 'react-intersection-observer';

const langMap = {
  en: enUS,
  sr: srLatn,
};

export function WeekWeatherData() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const localStoreLanguage = getLocalLanguage();
  const { cities, fetching, fetchingImage, image, weekForecast } = useSelector(
    (state) => state.weather
  );

  const { ref: dropdownRef, inView: inView } = useInView();

  const date = format(new Date(), 'dd MMMM', {
    locale: langMap[i18n.language],
  });

  const handleCitySelect = async (item) => {
    localStorage.setItem('selectedCity', JSON.stringify(item));
    const urbanApi = item?.href || item;
    dispatch(setFetchingImage(true));
    const { lat, lon, image } = await getCityLatLongImageUrban(urbanApi);
    dispatch(setImage(image));
    dispatch(setFetchingImage(false));
    dispatch(fetchWeather({ lat, lon }));
  };

  const selectedCity = JSON.parse(localStorage.getItem('selectedCity'));

  useEffect(() => {
    if (cities.length > 0) {
      const item = selectedCity;
      if (item) {
        handleCitySelect(item);
      } else {
        handleCitySelect(cities[0]);
      }
    }
  }, [cities]);

  const DateComponent = <DateElement>{date}</DateElement>;

  return (
    <>
      {/* Mobile City Select */}
      <CitySelectSection className='background' ref={dropdownRef}>
        <DropdownBig>
          <Dropdown
            list={cities}
            onSelect={handleCitySelect}
            defaultSelected={selectedCity}
            searchable
          />
        </DropdownBig>
        <DateElement>{date}</DateElement>
      </CitySelectSection>
      {/* Week Component */}
      <Container>
        <ImageBackground fetching={fetchingImage} url={image} />
        <DataSection className={`CitySelect ${!inView ? 'show' : 'hide'}`}>
          <>
            <DropdownBig>
              <Dropdown
                list={cities}
                onSelect={handleCitySelect}
                defaultSelected={selectedCity}
                searchable
              />
            </DropdownBig>
            <DateElement>{date}</DateElement>
          </>
          <DropdownSmall>
            <Dropdown
              onSelect={handleLanguageChange}
              list={LANGUAGES}
              defaultSelected={localStoreLanguage}
            />
          </DropdownSmall>
        </DataSection>
        <WeekCards>
          {weekForecast?.map((forcast, i) =>
            i > 0 ? (
              <WeekCard
                key={i}
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
    </>
  );
}
