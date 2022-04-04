const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * Get weather data from latitude and longitude
 * @param {number} lat
 * @param {number} lon
 * @returns object {current : object, daily : array}
 */
export const getWeekForcast = async (lat = 33.44, lon = -94.04) => {
  const api = `
    https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${WEATHER_KEY}`;
  const res = await fetch(api);
  const data = await res.json();
  const { current, daily } = data;
  return { current, daily };
};

/**
 * Get cities from city name
 * @param {string} search
 * @returns object {count : number, cities : array }
 */
export const getCitySearch = async (search) => {
  const citySearch = "https://api.teleport.org/api/cities/?search=";
  const api = `${citySearch}${search}`;
  const res = await fetch(api);
  const data = await res.json();
  const count = data.count;
  const cities = data["_embedded"]["city:search-results"];
  return { count, cities };
};

/**
 * Get list of all urban areas and api string. Can be used to futher fetch images and latitude and longituded
 * @returns array of object {href:urban_area api, name:area name}
 */
export const getAllCity = async () => {
  const api = "https://api.teleport.org/api/urban_areas/";
  const res = await fetch(api);
  const data = await res.json();
  const cities = data["_links"]["ua:item"];
  return cities;
};

/**
 * Use when getting information for city based on urban city api. Every urban object has geoname api.
 * @param {string} urban_api - needs to be urban_area format
 * @returns {lat, lon, image}
 */
export const getCityLatLongImageUrban = async (urban_api) => {
  const res = await fetch(urban_api);
  const data = await res.json();
  const href = data["_links"]["ua:identifying-city"].href;
  const cityObject = await getCityLatLongImage(href);
  return cityObject;
};

/**
 * Get latitude and logitude from geoname api
 * @param {int} geoname_api
 * @returns object { lat: number , lon: number}
 */
export const getCityLatLongImage = async (geoname_api) => {
  const res = await fetch(geoname_api);
  const data = await res.json();
  const { latitude, longitude } = data.location.latlon;
  const urbanArea = data["_links"]["city:urban_area"].href;
  const cityImage = await getCityImage(urbanArea);
  return { lat: latitude, long: longitude, image: cityImage };
};

/**
 * Get image href from area slug api.
 * @param {string} cityApi
 * @returns strging : image url
 */
export const getCityImage = async (cityApi) => {
  const api = `${cityApi}images`;
  const res = await fetch(api);
  const data = await res.json();
  const { photos } = data;

  return photos[0].image.mobile;
};
