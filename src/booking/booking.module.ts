import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { UserRepository } from 'src/user/user.repository';
import { BookingRepository } from './booking.repository';
import { ConfectioneryRepository } from 'src/confectionery/confectionery.repository';
import { ItemRepository } from 'src/item/item.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Booking, BookingRepository]),
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([ConfectioneryRepository]),
    TypeOrmModule.forFeature([ItemRepository]),
    UserModule
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
