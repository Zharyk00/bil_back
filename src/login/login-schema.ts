import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoginDocument = Login & Document;

@Schema()
export class Login {
  @Prop()
  name: string;

  @Prop({
    required: true,
  })
  age: number;
}

export const loginSchema = SchemaFactory.createForClass(Login);
