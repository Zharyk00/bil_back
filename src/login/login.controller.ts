import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import { Response as Res } from 'express';
import { LoginDto } from './login-dto.interface';
import { Login } from './login-schema';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post()
  logWithNumber(@Body() LoginDto: LoginDto) {
    return this.LoginService.loginUser(LoginDto);
  }

  // @Get(':id')
  // getUserById(@Param('id') id: string): Promise<Login> {
  //   return this.LoginService.getUserById(id);
  // }

  @Get('users')
  async getSomeData(@Response() res: Res): Promise<Res> {
    const data = await this.LoginService.getData();

    return res
      .set({ 'Access-Control-Expose-Headers': 'X-Total-Count' })
      .set({ 'X-Total-Count': data.length })
      .json(data);
  }

  @Get('get/page')
  getData(@Response() res: Res): any {
    return res.send(`<h1>Hello NestJs</h1>`);
  }
}
