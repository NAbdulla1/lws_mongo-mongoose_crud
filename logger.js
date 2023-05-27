const winston = require("winston");
require('winston-daily-rotate-file');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json({ space: 2 }),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'error',
      filename: './log/errors-%DATE%',
      datePattern: 'YYYY-MM-DD',
      extension: '.log',
      zippedArchive: true,
      maxSize: '10m'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
