import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";
import { IGenericErrorResponse } from "../interfaces/common";




const handleValidationError = (error: mongoose.Error.ValidationError):
    IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
        (err: mongoose.Error.ValidationError | mongoose.Error.CastError) => {
            return {
                statusCode: err.statusCode,
                path: err.path,
                message: err.message,
            }
        }
    )
    const statusCode = 400
    return {
        statusCode,
        message: 'Validation Error',
        errorMessage: errors,
    }
}

export default handleValidationError