import { Request, Response } from "express";
import usersService from "./users.service";


const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;

        console.log("User Requested Data:", user);
        const result = await usersService.createUser(user)
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to create user'
        })
        console.log(error);
    }
}

export default { createUser };