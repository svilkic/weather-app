import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { WeekCard } from './WeekCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCityLatLongImageUrban } from '../../helper/api';
import { LANGUAGES } from '../../constants/language';
import i18next from 'i18next';

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
} from './styleWeekWeatherData';

const langMap = {
  en: enUS,
  sr: srLatn,
};

export function WeekWeatherData() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const { cities, fetching, fetchingImage, image, weekForecast } = useSelector(
    (state) => state.weather
  );
  const date = format(new Date(), 'dd MMMM', {
    locale: langMap[i18n.language],
  });

  const handleLanguageChange = (lang = 'en') => {
    i18next.changeLanguage(lang.name);
  };

  const handleCitySelect = async (e) => {
    const urbanApi = e?.href || e;
    dispatch(setFetchingImage(true));
    const { lat, lon, image } = await getCityLatLongImageUrban(urbanApi);
    dispatch(setImage(image));
    dispatch(setFetchingImage(false));
    dispatch(fetchWeather({ lat, lon }));
  };

  useEffect(() => {
    if (cities.length > 0) {
      handleCitySelect(cities[0].href);
    }
  }, [cities]);

  return (
    <Container>
      <ImageBackground fetching={fetchingImage} url={image} />
      <DataSection className='CitySelect'>
        <DropdownBig>
          <Dropdown list={cities} onSelect={handleCitySelect} />
        </DropdownBig>
        <DropdownSmall>
          <Dropdown onSelect={handleLanguageChange} list={LANGUAGES} />
        </DropdownSmall>
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
