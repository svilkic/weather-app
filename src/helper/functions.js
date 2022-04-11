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
