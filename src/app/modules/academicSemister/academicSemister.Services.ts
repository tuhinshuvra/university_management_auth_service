import { IAcademicSemister } from "./academicSemister.Interface";
import { AcademicSemister } from "./academicSemister.Model";




const createSemister = async (payload: IAcademicSemister): Promise<IAcademicSemister> => {
    const result = await AcademicSemister.create(payload);
    return result;
}

export const AcademicSemisterService = {
    createSemister,
}