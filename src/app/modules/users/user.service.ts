import config from "../../../config/index";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.models";
import { generatedUserId } from "./users.utils";

const createUser = async (user: IUser): Promise<IUser | null> => {

    const id = await generatedUserId()
    user.id = id

    if (!user.password) {
        user.password = config.default_user_pass as string
    }

    const createdUser = await User.create(user)

    if (!createUser) {
        throw new ApiError(400, 'Failed to create new user!')
    }
    return createdUser

}

export default { createUser }