import { PartialType } from "@nestjs/mapped-types"
import { CategoryDto} from './categoryinput.dto'

export class PartialCategoryDto extends PartialType(CategoryDto) {
    id: string;
}