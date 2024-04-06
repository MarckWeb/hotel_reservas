import { Body, Controller, Get, HttpStatus, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { ServiceService } from './service.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateServiceDto } from './dtos/createService.dto';

@Controller('service')
export class ServiceController {
   constructor(private readonly servicesService: ServiceService) { }

   @Get()
   async getAllServices(@Res() res: Response) {
      try {
         const services = await this.servicesService.getAllServices()
         return res.status(HttpStatus.OK).send(services);
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error al obtener los servicios',
            error: error.message
         });
      }
   }

   @Post()
   @UseInterceptors(FileInterceptor('image'))
   async createServices(
      @Body() body: CreateServiceDto,
      @Res() res: Response,
      @UploadedFile() image: Express.Multer.File
   ) {
      try {

         console.log(body, image)

         await this.servicesService.createService(body, image);

         return res.status(201).json({
            success: true,
            message: "Registro exitoso"
         })
      } catch (e) {
         return res.status(500).json({
            success: false,
            message: 'Error al guardar los datos',
            error: e.message
         });
      }
   }
}
