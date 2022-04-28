import { enUS, srLatn } from 'date-fns/locale';

export const LANGUAGES = [
  {
    id: '1',
    name: 'en',
    icon: 'weather-app/addons/language/flag-gb.svg',
  },

  {
    id: '2',
    name: 'sr',
    icon: 'weather-app/addons/language/flag.rs.svg',
  },
];

export const langMap = {
  en: enUS,

  sr: srLatn,
};
