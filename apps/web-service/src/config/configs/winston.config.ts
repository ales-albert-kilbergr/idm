import { parseDate } from '@idm/node-logger-utils';
import { registerAs } from '@nestjs/config';
import * as chalk from 'chalk';
import * as logform from 'logform';
import { WinstonModuleOptions } from 'nest-winston';
import * as util from 'util';
import * as winston from 'winston';
import { environment } from '../../environments/environment';

function parseMessage(message: unknown) {
  if (typeof message === 'object') {
    return util.inspect(message, false, null, true /* enable colors */);
  } else {
    return message;
  }
}

function parseStack(stack = '') {
  return chalk`{dim ${stack}}`;
}

export const winstonConfig = registerAs('winston', () => {
  const config: WinstonModuleOptions = {
    defaultMeta: { label: 'IDM Api' },
  };

  let formatter: logform.Format;

  if (environment.production) {
    formatter = winston.format.json();
  } else {
    formatter = winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf((info) => {
        return (
          chalk`{cyan [${info.label}] {yellow ${process.pid}} -}  ` +
          chalk`{dim ${parseDate(info.timestamp)}: }` +
          chalk`${info.level} {yellow [${info.context}]} ` +
          chalk` {green ${parseMessage(info.message)}}${parseStack(info.stack)}`
        );
      })
    );
  }

  config.transports = [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL,
      handleExceptions: true,
      format: formatter,
    }),
  ];
  return config;
});
