import { IUserEntity } from '../entities/user.entity'
import { UserDto } from './dto/userinput.dto'
import { randomUUID } from 'crypto'
import { PartialUserDto } from './dto/partialUserInput'
import { ICategoryEntity } from 'category/entities/category.entity'

export class UserService {
    private users: IUserEntity[] = []
    private category: ICategoryEntity[] = []
    
    async createUser(user: UserDto): Promise<IUserEntity> {
        const userEntity = {id:randomUUID(), ...user,createdAt: Date.now(), category: 'normal' }

        if (!user.email) {
            throw new Error('Email já cadastrado!')
        }

        this.users.push(userEntity)
        return userEntity
    }

    async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
        this.users.map((user, index) => {
            if (user.id === userData.id) {
                const UpdatedUser = Object.assign(user, userData)
                this.users.splice(index, 1, UpdatedUser)
            }
        }) 
        const updatedUser = this.users.find((user) => user.id === userData.id)
        return updatedUser
    }

    async getAllUsers(): Promise<IUserEntity[]> {
            return this.users
    }
 
    async getUserById(userId:string): Promise<IUserEntity> {
        const userById = this.users.find((user) => user.id === userId)
        if (!userById) {
            throw new Error('Usuario não encontrado!')
        }
        return userById
     }


    async deleteUserById(userId: string): Promise<boolean> {
        const deletedUserID = this.users.find((user) => user.id === userId)
        if (!deletedUserID) {
            return false
        }

        this.users.map((user, index) => {
            if (user.id === userId) {
                this.users.splice(index, 1)
                return 
            }
        })

        return true
    }
}