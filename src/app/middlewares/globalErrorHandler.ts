import { NextFunction, Request, Response } from "express"


const globalErrorHandlar = (error, req: Request, res: Response, next: NextFunction) => {
    next()
}

export default globalErrorHandlar