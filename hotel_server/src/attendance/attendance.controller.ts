import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Attendances } from './model/attendance.schema';
import { Response } from 'express';
import { CreateAttendacesDto } from './dtos/createAttendaceStos';

@Controller('attendance')
export class AttendanceController {
   constructor(private readonly attendanceService: AttendanceService) { }
   @Get()
   getAll(): Promise<Attendances[]> {
      return this.attendanceService.getCateringAll();
   }

   @Get(':userId')
   async getCatering(@Param('userId') userId: string, @Res() res: Response) {
      try {
         const catering = await this.attendanceService.getCatering(userId)
         return res.status(HttpStatus.OK).send(catering);
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error al obtener datos',
            error: error.message
         });
      }
   }

   @Post()
   async createCatering(
      @Body() body: CreateAttendacesDto,
      @Res() res: Response,
   ) {
      try {
         await this.attendanceService.createCatering(body);

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

   @Put(':id')
   async updateCatring(
      @Param('id') id: string,
      @Body() body: CreateAttendacesDto,
      @Res() res: Response) {
      try {
         const updatedCatering = await this.attendanceService.updateCatering(id, body);
         return res.status(201).json({
            success: true,
            message: "Datos Actualizados",
            catering: updatedCatering
         })

      } catch (e) {
         console.error(e)
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al actualizar el room',
            error: e.message,
         });
      }
   }

   @Delete(':id')
   async deleteCatering(@Param('id') id: number, @Res() res: Response) {
      try {
         const cateringToDelete = await this.attendanceService.deleteCatering(id);
         return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Catering eliminado',
            user: cateringToDelete
         });
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al eliminar el catering',
            error: error.message,
         });
      }
   }

}
