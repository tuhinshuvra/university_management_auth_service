import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandlar from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';

const app: Application = express();
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', UserRoutes)

class ApiError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string | undefined, stack = '') {
        super(message)
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    // res.send('Welcome to University Management Auth Service!')
    // throw new ApiError(400, "Ore babare error")
    // next('Ore Babare Error khaice!')
    Promise.reject(new Error('Unhaled Promise Rejection'))
})

// global error handler
app.use(globalErrorHandlar)


export default app;