import { Module } from '@nestjs/common';
import { CategoryController } from 'category/controller/category.controller';
import { CategoryService } from 'category/services/category.services';
import { UserController } from 'user/controller/user.controller';
import { UserService } from 'user/services/user.services';

@Module({
  imports: [],
  controllers: [UserController, CategoryController],
  providers: [UserService, CategoryService],
})
  
export class AppModule {}
