import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { Auth } from './auth.schema';
import { AuthService } from './auth.service';
import { Dto } from './dto/dto.interface';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Get(':id')
  getAll(@Param('id') id: string) {
    return this.AuthService.getByid(id);
  }

  @Post('singin')
  @HttpCode(208)
  singin() {
    return this.AuthService.singin();
  }

  @Post('singup')
  singup(@Body() dto: Dto) {
    console.log(dto);
    return this.AuthService.singup(dto);
  }
}
