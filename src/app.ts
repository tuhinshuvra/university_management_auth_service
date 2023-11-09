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




// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     // res.send('Welcome to University Management Auth Service!')
//     next('Ore Babare Error khaice!')
// })

app.use(globalErrorHandlar)


export default app;