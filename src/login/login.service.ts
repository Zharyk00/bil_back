import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { LoginDto } from './login-dto.interface';
import { Login, LoginDocument } from './login-schema';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Login.name) private LoginModel: Model<LoginDocument>,
  ) {}

  async loginUser(loginUser: LoginDto): Promise<Login> {
    const usersNumber = new this.LoginModel(loginUser);
    return usersNumber.save();
  }

  async getUserById(id: string): Promise<Login> {
    return this.LoginModel.findById(id);
  }
}
