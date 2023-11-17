import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandlar from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
import { AcademicSemisterRoutes } from './app/modules/academicSemister/academicSemister.route';

const app: Application = express();
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/users', UserRoutes)
app.use('/api/v1/academic-semister', AcademicSemisterRoutes)


app.get('/', async (req: Request, res: Response) => {
    res.send('Welcome to University Management Auth Service!')
})

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     // res.send('Welcome to University Management Auth Service!')
//     // throw new ApiError(400, "Ore babare error")
//     // next('Ore Babare Error khaice!')
//     Promise.reject(new Error('Unhaled Promise Rejection'))
// })

// global error handler
app.use(globalErrorHandlar)


export default app;