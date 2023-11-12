import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './app/modules/users/users.route'
import globalErrorHandlar from './app/middlewares/globalErrorHandler';

const app: Application = express();
// const port = 3000; 

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)

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
    next('Ore Babare Error khaice!')
})

// global error handler
app.use((error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        res.status(400).json({ error: error })
    } else {
        res.status(500).json({ error: "Something went wrong" })
    }
})

app.use(globalErrorHandlar)


export default app;