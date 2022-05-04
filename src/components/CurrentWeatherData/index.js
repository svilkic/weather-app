import React, { useEffect, useState } from 'react';
// Libs
import { useDispatch, useSelector } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
// Constants
import { getWeatherIcon } from '../../constants/iconMapping';
import { langMap } from '../../constants/language';
// Redux
import { fetchWeather, setLastUpdate } from '../../store/slices/weatherSlice';
// Icons
import { MdRefresh } from 'react-icons/md';
// SVG
import { Wave1, Wave2 } from './Waves';
// Styles
import {
  Container,
  CurrentData,
  RefreshContainer,
  Temperature,
  Value,
  Text,
  Icon,
  RefreshButton,
  Info,
} from './styleCurrentWeatherData';
import { TemperatureNumber } from './TemperatureNumber';

export function CurrentWeatherData() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { lastUpdate, currentForecast, lat, lon } = useSelector(
    (state) => state.weather
  );

  const getDateOptions = () => ({
    includeSeconds: true,
    locale: langMap[i18n.language],
  });

  const defaultTime = formatDistanceToNow(new Date(), getDateOptions());
  const [updateDate, setUpdateDate] = useState(defaultTime);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const loop = setInterval(() => {
      setUpdateDate(
        formatDistanceToNow(new Date(JSON.parse(lastUpdate)), getDateOptions())
      );
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [i18n, lastUpdate]);

  const handleRefresh = () => {
    if (!fetching) {
      var refreshBtn = document.querySelector('#refreshIcon');
      refreshBtn.classList.toggle('rotate');
      handleReset(refreshBtn);
      setFetching(true);
      const currentTime = JSON.stringify(new Date());
      dispatch(setLastUpdate(currentTime));
      dispatch(fetchWeather({ lat, lon }));
    }
  };

  const handleReset = (refreshBtn) => {
    setTimeout(() => {
      refreshBtn.classList.toggle('rotate');
      setFetching(false);
    }, 1000);
  };

  const currentTemperature = Math.round(currentForecast.temp || 0);
  const symbol = currentForecast.weather ? currentForecast.weather[0].id : '';
  const description = currentForecast.weather
    ? currentForecast.weather[0].description
    : 'Loading';
  const icon = getWeatherIcon(symbol);

  const weatherList = t('weather', { returnObjects: true });
  const weatherIndex = currentForecast.weather
    ? currentForecast.weather[0].id
    : '200';

  const weatherState = weatherList[weatherIndex];

  return (
    <Container>
      <CurrentData>
        <Temperature>
          <TemperatureNumber value={currentTemperature} />
          <Text>{weatherState}</Text>
        </Temperature>
        <Icon src={icon} alt={description}></Icon>
      </CurrentData>
      <RefreshContainer>
        <RefreshButton onClick={handleRefresh}>
          <MdRefresh id='refreshIcon' />
          <Info>
            <Trans
              i18nKey='Updated'
              values={{
                val: updateDate,
              }}
            />
          </Info>
        </RefreshButton>
      </RefreshContainer>
      <Wave1 />
      <Wave2 />
    </Container>
  );
}
