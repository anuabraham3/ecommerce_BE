import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfectioneryModule } from './confectionery/confectionery.module';
import { ItemModule } from './item/item.module';
import { BookingModule } from './booking/booking.module';
import { typeOrmConfig } from './config/db.config'

@Module({
  imports: [ UserModule, ConfectioneryModule, ItemModule, BookingModule,
    TypeOrmModule.forRoot(typeOrmConfig),],
  controllers: [],
  providers: [],
})
export class AppModule {}
