import { anonymize } from './anonymize';

describe('(Unit) anonymize()', () => {
  it('should anonymize a string', () => {
    const input = 'Some Input value';
    const output = anonymize(input);

    expect(output).toBe('So*****ue');
  });

  it('should hadle short string', () => {
    const input = 'AB';
    const output = anonymize(input);

    expect(output).toBe('AB');
  });

  it('should enable custom placeholder', () => {
    const input = 'Some Input value';
    const output = anonymize(input, { placeholder: '-' });

    expect(output).toBe('So-----ue');
  });
});
