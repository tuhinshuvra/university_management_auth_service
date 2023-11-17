import { RequestHandler } from "express";
import { AcademicSemisterService } from "./academicSemister.Services";


const createSemister: RequestHandler = async (req, res, next) => {
    try {
        const { ...academicSemisterData } = req.body;
        const result = await AcademicSemisterService.createSemister(academicSemisterData)
        res.status(200).json({
            success: true,
            message: 'Academic semister is created successfully!',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export const AcademicSemisterController = {
    createSemister,
};