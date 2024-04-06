import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservations, reservationSchema } from './model/reservation.schema';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Reservations.name,
            schema: reservationSchema
         }
      ]),

   ],
   controllers: [ReservationController],
   providers: [ReservationService],
   exports: [ReservationService]
})
export class ReservationModule { }
