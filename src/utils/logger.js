import winston from "winston";

const logFormat = winston.format.printf(({ timestamp, level, message, meta }) => {
  return `${timestamp} [${level}] : ${message} ${meta ? JSON.stringify(meta) : ''}`;
});

const logger = winston.createLogger({
  level: 'info',  
  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),
  transports: [
    
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
   
    new winston.transports.File({ filename: 'app.log' })
  ],
  exceptionHandlers: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'exceptions.log' })
  ],
  rejectionHandlers: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'rejections.log' })
  ]
});

export default {logger}