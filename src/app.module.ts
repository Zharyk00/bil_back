import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Zharyk:vI2eox4CpkHtT6AI@clusterone.u5th3w5.mongodb.net/bil_back',
    ),
    LoginModule,
  ],
})
export class AppModule {}
