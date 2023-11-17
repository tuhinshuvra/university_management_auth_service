import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemisterValidation } from './academicSemister.Validation';
import { AcademicSemisterController } from './academicSemister.Controllers';

const router = express.Router()

router.post(
    '/create-semister',
    validateRequest(AcademicSemisterValidation.academicSemisterZodschemahema),
    AcademicSemisterController.createSemister
);

export const AcademicSemisterRoutes = router;