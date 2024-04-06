import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendances, attendanceSchema } from './model/attendance.schema';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Attendances.name,
            schema: attendanceSchema
         }
      ]),

   ],
   controllers: [AttendanceController],
   providers: [AttendanceService],
   exports: [AttendanceService]
})
export class AttendanceModule { }
