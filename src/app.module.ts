import { Module } from '@nestjs/common';
import { UserController } from 'user/controller/user.controller';
import { UserService } from 'user/services/user.services';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
  
export class AppModule {}
