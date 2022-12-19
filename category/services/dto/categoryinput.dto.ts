import { ApiProperty } from '@nestjs/swagger'
import { IsString} from 'class-validator'

export class CategoryDto {
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @IsString()
    users: [];
}

