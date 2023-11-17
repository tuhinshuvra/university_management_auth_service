import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { academicSemisterTitleCodeMapper } from "./academicSemister.Conostant";
import { IAcademicSemister } from "./academicSemister.Interface";
import { AcademicSemister } from "./academicSemister.Model";




const createSemister = async (payload: IAcademicSemister): Promise<IAcademicSemister> => {

    if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Semister Code");
    }

    const result = await AcademicSemister.create(payload);
    return result;
}




export const AcademicSemisterService = {
    createSemister,
}