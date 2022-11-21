import { parseDate } from './parse-date';

describe('(Unit) parseDate', () => {
  it('should parse a date into string', () => {
    const dateLike = 1668981586059;
    const output = parseDate(dateLike);

    expect(output).toBe('11.20.2022 22:59:46.59');
  });
});
