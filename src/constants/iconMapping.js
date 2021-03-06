const weatherIconMap = {
  200: '/addons/icons/climacon-cloud_lightning_sun.svg',
  201: '/addons/icons/climacon-cloud_lightning_sun.svg',
  202: '/addons/icons/climacon-cloud_lightning_sun.svg',
  210: '/addons/icons/climacon-cloud_lightning_sun.svg',
  211: '/addons/icons/climacon-cloud_lightning_sun.svg',
  212: '/addons/icons/climacon-cloud_lightning_sun.svg',
  221: '/addons/icons/climacon-cloud_lightning_sun.svg',
  230: '/addons/icons/climacon-cloud_lightning_sun.svg',
  231: '/addons/icons/climacon-cloud_lightning_sun.svg',
  232: '/addons/icons/climacon-cloud_lightning_sun.svg',
  300: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  301: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  302: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  310: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  311: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  312: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  313: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  314: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  321: '/addons/icons/climacon-cloud_drizzle_sun.svg',
  500: '/addons/icons/climacon-cloud_rain_sun.svg',
  501: '/addons/icons/climacon-cloud_rain_sun.svg',
  502: '/addons/icons/climacon-cloud_rain_sun.svg',
  503: '/addons/icons/climacon-cloud_rain_sun.svg',
  504: '/addons/icons/climacon-cloud_rain_sun.svg',
  511: '/addons/icons/climacon-cloud_hail_sun.svg',
  520: '/addons/icons/climacon-cloud_rain_alt_sun.svg',
  521: '/addons/icons/climacon-cloud_rain_alt_sun.svg',
  522: '/addons/icons/climacon-cloud_rain_alt_sun.svg',
  531: '/addons/icons/climacon-cloud_rain_alt_sun.svg',
  600: '/addons/icons/climacon-cloud_snow_sun.svg',
  601: '/addons/icons/climacon-cloud_snow_alt_sun.svg',
  602: '/addons/icons/climacon-cloud_snow_alt_sun.svg',
  611: '/addons/icons/climacon-cloud_hail_alt_sun.svg',
  612: '/addons/icons/climacon-cloud_hail_alt_sun.svg',
  615: '/addons/icons/climacon-cloud_hail_alt_sun.svg',
  616: '/addons/icons/climacon-cloud_hail_alt_sun.svg',
  620: '/addons/icons/climacon-cloud_snow_sun.svg',
  621: '/addons/icons/climacon-cloud_snow_sun.svg',
  622: '/addons/icons/climacon-cloud_snow_alt_sun.svg',
  701: '/addons/icons/climacon-cloud_fog_sun.svg',
  711: '/addons/icons/climacon-cloud_fog_alt_sun.svg',
  721: '/addons/icons/climacon-cloud_fog_sun.svg',
  731: '/addons/icons/climacon-tornado.svg',
  741: '/addons/icons/climacon-cloud_fog_sun.svg',
  751: '/addons/icons/climacon-cloud_fog_alt_sun.svg',
  761: '/addons/icons/climacon-cloud_fog_alt_sun.svg',
  762: '/addons/icons/climacon-cloud_fog_alt_sun.svg',
  771: '/addons/icons/climacon-cloud_fog_alt_sun.svg',
  781: '/addons/icons/climacon-tornado.svg',
  800: '/addons/icons/climacon-sun.svg',
  801: '/addons/icons/climacon-cloud_sun.svg',
  802: '/addons/icons/climacon-cloud_sun.svg',
  803: '/addons/icons/climacon-cloud_sun.svg',
  804: '/addons/icons/climacon-cloud_sun.svg',
};

const getWeatherIcon = code => `${process.env.PUBLIC_URL}/${weatherIconMap[code]}`;

export { getWeatherIcon };
