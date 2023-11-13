import mongoose from "mongoose";
import config from "./config";
import app from "./app";
import { infoLogger, errorLogger } from "./shared/logger";
import { Server } from 'http'


async function bootstrap() {
    let server: Server
    try {
        await mongoose.connect(config.database_url as string);
        infoLogger.info('Database is connected successfully!');
        server = app.listen(config.port, () => {
            infoLogger.info(`Application listening on port ${config.port}`)
        })
    } catch (error) {
        errorLogger.error("Failed to connect database: ", error);
    }

    process.on('unhandledRejection', error => {

        console.log('Unhandled Rejection is detected , we are closing our server.');

        if (server) {
            server.close(() => {
                errorLogger.error(error)
            })
        } else {
            process.exit(1)
        }
    })
}
bootstrap()