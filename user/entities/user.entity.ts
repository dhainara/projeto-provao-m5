import { UserDto } from "user/services/dto/userinput.dto";

export interface IUserEntity extends UserDto{
    id: string;
}