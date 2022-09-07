import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    MongooseModule.forRoot(
      'mongodb+srv://Zharyk:vI2eox4CpkHtT6AI@clusterone.u5th3w5.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductsModule,
  ],
})
export class AppModule {}
