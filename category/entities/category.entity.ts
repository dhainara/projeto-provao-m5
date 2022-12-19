import { CategoryDto } from "category/services/dto/categoryinput.dto";

export interface ICategoryEntity extends CategoryDto{
    id: string;
}