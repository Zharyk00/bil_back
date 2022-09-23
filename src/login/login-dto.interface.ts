import { IsInt, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsInt()
  @IsNotEmpty()
  phone: number;

  @IsInt()
  @IsNotEmpty()
  age: number;
}
