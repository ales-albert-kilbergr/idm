export interface IAnonymizeOptions {
  /**
   * The `start` sets count of characters left from the string start.
   *
   * Default value is 2
   */
  start?: number;
  /**
   * The `end` sets count of characters left from the string end.
   *
   * Default value is 2
   */
  end?: number;
  /**
   * The `placeholder` sets a character used in between start and end.
   *
   * Default value is '*'
   */
  placeholder?: string;
  /**
   * The `placeholderCount` sets a length of anonymized part.
   *
   * Default value is 5
   */
  placeholderCount?: number;
}

export const ANONYMIZE_DEFAULT_OPTIONS: IAnonymizeOptions = {
  start: 2,
  end: 2,
  placeholder: '*',
  placeholderCount: 5,
};

/**
 * Anonymize a sensitive value into something like this 'af**df'.
 */
export function anonymize(value: string, opts?: IAnonymizeOptions): string {
  const normalizedOpts = opts
    ? { ...ANONYMIZE_DEFAULT_OPTIONS, ...opts }
    : ANONYMIZE_DEFAULT_OPTIONS;

  if (value.length <= normalizedOpts.start + normalizedOpts.end) {
    return value;
  }
  let placeholder = '';

  for (let i = 0; i < normalizedOpts.placeholderCount; i++) {
    placeholder += normalizedOpts.placeholder;
  }
  return (
    value.slice(0, normalizedOpts.start) +
    placeholder +
    value.slice(-1 * normalizedOpts.end)
  );
}
