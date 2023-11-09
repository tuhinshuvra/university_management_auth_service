import path from 'path';
import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf, prettyPrint } = format
import DailyRotateFile from 'winston-daily-rotate-file';

// Custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});


const infoLogger = createLogger({
    level: 'info',
    format: combine(label({ label: 'Bangla University Management' }), timestamp(), myFormat, prettyPrint()),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'successes',
                'bum-%DATE%-success.log'
            ),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        }),
    ],
});

const errorLogger = createLogger({
    level: 'error',
    format: combine(label({ label: 'Bangla University Management' }), timestamp(), myFormat, prettyPrint()),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'errors',
                'bum-%DATE%-error.log'
            ),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});

export { infoLogger, errorLogger }