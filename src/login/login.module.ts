import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, loginSchema } from './login-schema';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Login.name, schema: loginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
