import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Auth, AuthDocument } from './auth.schema';
import { Dto } from './dto/dto.interface';

@Injectable({})
export class AuthService {
  constructor(@InjectModel(Auth.name) private AuthModel: Model<AuthDocument>) {}

  singin() {
    const user = new this.AuthModel();
    return user.save();
  }
  //This is for Get query
  async singup(dto: Dto): Promise<Auth> {
    const users = new this.AuthModel(dto);
    return users.save();
  }

  getByid(id) {
    return `this is ${id}`;
  }
}
