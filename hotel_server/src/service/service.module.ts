import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Services, serviceSchema } from './models/service.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';

@Module({

   imports: [
      MongooseModule.forFeature([
         {
            name: Services.name,
            schema: serviceSchema
         }
      ]),

      MulterModule.registerAsync({
         useFactory: () => ({
            storage: diskStorage({}),
         }),
      }),
   ],

   controllers: [ServiceController],
   providers: [ServiceService],
   exports: [ServiceService]

})
export class ServiceModule { }
