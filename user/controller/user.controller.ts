import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { IUserEntity } from "user/entities/user.entity";
import { PartialUserDto } from "user/services/dto/partialUserInput";
import { UserDto } from "user/services/dto/userinput.dto";
import { UserService } from "user/services/user.services";

@Controller()
export class UserController{
    constructor(private readonly service: UserService){}

    @Get()
    async getAllUser(): Promise<IUserEntity[]>{
        return await this.service.getAllUsers()
    }

    @Post()
    async createUser(
        @Body() { email, password, name }: UserDto,): Promise<IUserEntity>{
        try {
            return await this.service.createUser({
                name,
                email,
                password,
            })
        } catch (err) {
            console.log(err)
        }
    }

    @Patch(':id')
    async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
        try {
            return await this.service.updateUser(userData)
        } catch (err) {
            console.log(err)
        }
    }

    @Get(':id')
    async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
        try {
            return await this.service.getUserById(userId)
        } catch (err) {
            console.log(err)
        }
    }

    @Delete(':id')        
    async deleteUserById(@Param('id') userId: string): Promise<string> {
        try {
            const userIsDeleted = await this.service.deleteUserById(userId)
            if (userIsDeleted) {
                return "Usuario deletado com sucesso!"
            } else {
                return "Usuario não encontrado."
            }
        } catch (err) {
            console.log(err)
        }
    }
}