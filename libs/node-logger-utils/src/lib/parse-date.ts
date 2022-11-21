/**
 * Parse a date like value into human readable format for logs.
 */
export function parseDate(dateLike: number | string | Date): string {
  const now = dateLike instanceof Date ? dateLike : new Date(dateLike);
  const cMonth = `0${now.getMonth() + 1}`.slice(-2);
  const cDate = `0${now.getDate()}`.slice(-2);
  const cHours = `0${now.getHours()}`.slice(-2);
  const cMinutes = `0${now.getMinutes()}`.slice(-2);
  const cSeconds = `0${now.getSeconds()}`.slice(-2);

  return (
    `${cMonth}.${cDate}.${now.getFullYear()} ` +
    `${cHours}:${cMinutes}:${cSeconds}.${now.getMilliseconds()}`
  );
}
