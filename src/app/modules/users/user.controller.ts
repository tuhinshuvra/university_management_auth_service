/* eslint-disable consistent-type-definitions */




import { RequestHandler } from "express";
import usersService from "./user.service";

const createUser: RequestHandler = async (req, res, next) => {
    try {
        const user = req.body;
        // console.log("User Requested Data:", user);

        const result = await usersService.createUser(user)
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result
        })

    } catch (error) {
        next(error)
    }
}

export default { createUser };