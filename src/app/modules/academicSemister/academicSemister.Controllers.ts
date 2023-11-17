import { NextFunction, Request, Response } from "express";
import { AcademicSemisterService } from "./academicSemister.Services";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createSemister = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemisterData } = req.body;
    const result = await AcademicSemisterService.createSemister(academicSemisterData)

    next();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semister is created successfully!',
        data: result,
    });
});

export const AcademicSemisterController = {
    createSemister,
};