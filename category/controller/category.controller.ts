import {
    Body,
    Controller,
    Get,
    Param,
    Patch
} from "@nestjs/common";
import { ICategoryEntity } from "category/entities/category.entity";
import { PartialCategoryDto } from "category/services/dto/partialCategoryInput";
import { CategoryService } from "category/services/category.services";

@Controller()
export class CategoryController{
    constructor(private readonly service: CategoryService){}

    @Get()
    async getAllCategory(): Promise<ICategoryEntity[]>{
        return await this.service.getAllCategorys()
    }

    @Patch(':id')
    async updateCategory(@Body() userData: PartialCategoryDto): Promise<ICategoryEntity> {
        try {
            return await this.service.updateCategory(userData)
        } catch (err) {
            console.log(err)
        }
    }

    @Get(':id')
    async getCategoryById(@Param('id') userId: string): Promise<ICategoryEntity> {
        try {
            return await this.service.getCategoryById(userId)
        } catch (err) {
            console.log(err)
        }
    }
}