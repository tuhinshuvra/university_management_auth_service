import { ErrorRequestHandler } from "express"
import handleValidationError from "../../errors/handleValidationError";
import config from "../../config";
import ApiError from "../../errors/ApiError";


const globalErrorHandlar: ErrorRequestHandler = (
    error, req, res, next
) => {
    let statusCode = 500;
    let message = 'Something went wrong!'
    let errorMessages: IGenericErrorMessage[] = []

    type IGenericErrorMessage = {
        path: string;
        message: string
    }


    if (error?.name === 'ValidationError') {
        const simpliedError = handleValidationError(error)
        statusCode = simpliedError.statusCode;
        message = simpliedError.message;
        errorMessages = simpliedError.errorMessage
    }
    else if (error instanceof ApiError) {
        statusCode = error?.statusCode
        message = error?.message
        errorMessages = error?.message ?
            [
                {
                    path: '',
                    message: error?.message
                }
            ]
            : []
    } else if (error instanceof Error) {
        message = error?.message
        errorMessages = error?.message ?
            [
                {
                    path: '',
                    message: error?.message
                }
            ]
            : []
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env != 'production' ? error.stack : undefined,
    })
    next()
}

export default globalErrorHandlar