import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rooms, roomSchema } from './model/room.schema';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Rooms.name,
            schema: roomSchema
         }
      ]),

      MulterModule.registerAsync({
         useFactory: () => ({
            storage: diskStorage({}),
         }),
      }),
   ],

   controllers: [RoomController],
   providers: [RoomService],
   exports: [RoomService]
})
export class RoomModule { }
