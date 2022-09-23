import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoginDocument = Login & Document;

@Schema()
export class Login {
  @Prop()
  phone: number;

  @Prop({
    required: true,
  })
  age: number;
}

export const loginSchema = SchemaFactory.createForClass(Login);
