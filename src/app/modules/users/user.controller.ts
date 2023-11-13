import { RequestHandler } from "express";
import { UserService } from "./user.service";
import { z } from 'zod'


const createUser: RequestHandler = async (req, res, next) => {
    try {


        await createUserZodSchema.parseAsync(req)

        const user = req.body;
        const result = await UserService.createUser(user)
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result
        })

    } catch (error) {
        next(error)
    }
}

export const UserController = {
    createUser,
};