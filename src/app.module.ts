import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://moon:moon5824@clustertwo.dzysqqy.mongodb.net/bil_back',
    ),
    LoginModule,
  ],
})
export class AppModule {}
