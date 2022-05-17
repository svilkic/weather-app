import i18next from 'i18next';

/**
 * For given seconds converts to EPOCH date format, and returns
 * @param {int} seconds
 * @returns integer week index
 */
export function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t.getDay();
}
/**
 * Set current language
 * @param {object} lang
 */
export const handleLanguageChange = (lang = 'en') => {
  i18next.changeLanguage(lang.name);
  localStorage.setItem('language', JSON.stringify(lang));
};

// Get language from localStorage
export const getLocalLanguage = () =>
  JSON.parse(localStorage.getItem('language')) || undefined;
