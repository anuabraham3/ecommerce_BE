import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db.config';
import { ConfectioneryModule } from './confectionery/confectionery.module';
import { ItemModule } from './item/item.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),UserModule, ConfectioneryModule, ItemModule, BookingModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
