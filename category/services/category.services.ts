import { ICategoryEntity } from '../entities/category.entity'
import { randomUUID } from 'crypto'
import { PartialCategoryDto } from './dto/partialCategoryInput'
import { CategoryDto } from './dto/categoryinput.dto'

export class CategoryService {
    private users: ICategoryEntity[] =[]
    
    async createCategory(category: CategoryDto): Promise<ICategoryEntity> {
        const userEntity = {...category, id:randomUUID(), createdAt: Date.now()}
        this.users.push(userEntity)
        return userEntity
    }

    async updateCategory(userData: PartialCategoryDto): Promise<ICategoryEntity> {
        this.users.map((category, index) => {
            if (category.id === userData.id) {
                const UpdatedCategory = Object.assign(category, userData)
                this.users.splice(index, 1, UpdatedCategory)
            }
        }) 
        const updatedCategory = this.users.find((category) => category.id === userData.id)
        return updatedCategory
    }

    async getAllCategorys(): Promise<ICategoryEntity[]> {
        return this.users
    }
 
    async getCategoryById(userId:string): Promise<ICategoryEntity> {
        const userById = this.users.find((category) => category.id === userId)
        if (!userById) {
            throw new Error('Usuario nao encontrado!')
        }
        return userById
     }


    async deleteCategoryById(userId: string): Promise<boolean> {
        const deletedCategoryID = this.users.find((category) => category.id === userId)
        if (!deletedCategoryID) {
            return false
        }

        this.users.map((category, index) => {
            if (category.id === userId) {
                this.users.splice(index,1)
            }
        })

        return true
    }
}