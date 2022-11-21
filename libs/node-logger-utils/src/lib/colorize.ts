import * as chalk from 'chalk';
/**
 * Colorize an url in unified manner.
 */
export function colorizeUrl(url: string): string {
  return chalk`{cyan ${url}}`;
}
