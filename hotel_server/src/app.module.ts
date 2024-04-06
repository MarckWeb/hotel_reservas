import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { v2 as cloudinary } from 'cloudinary';
import { RoomModule } from './room/room.module';
import { ServiceModule } from './service/service.module';
import { ReservationModule } from './reservation/reservation.module';
import { AttendanceModule } from './attendance/attendance.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    AuthModule,
    RoomModule,
    ServiceModule,
    ReservationModule,
    AttendanceModule,
  ],

  providers: [
    {
      provide: 'CLOUDINARY',
      useValue: cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      })
    },

  ],
  exports: ['CLOUDINARY'],



})
export class AppModule { }
