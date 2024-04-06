import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Response } from 'express';
import { Reservations } from './model/reservation.schema';

@Controller('reservation')
export class ReservationController {
   constructor(private readonly reservaService: ReservationService) { }

   @Get()
   getAll(): Promise<Reservations[]> {
      return this.reservaService.getReservationsAll();
   }

   @Get(':userId')
   async getReservation(@Param('userId') userId: string, @Res() res: Response) {
      try {
         const reservation = await this.reservaService.getReservation(userId)

         return res.status(HttpStatus.OK).send(reservation);
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error al obtener la habitacion',
            error: error.message
         });
      }
   }

   @Post()
   async createReservation(
      @Body() body: any,
      @Res() res: Response,
   ) {
      try {
         await this.reservaService.createReservation(body);
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
   async updateUser(
      @Param('id') id: string,
      @Body() body: any,
      @Res() res: Response) {
      try {

         const updatedUser = await this.reservaService.updateReservation(id, body);
         return res.status(201).json({
            success: true,
            message: "Datos Actualizados",
            user: updatedUser
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
   async deleteReserva(@Param('id') id: number, @Res() res: Response) {
      try {
         const roomToDelete = await this.reservaService.deleteReserva(id);
         return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Reserva eliminado',
            user: roomToDelete
         });
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al eliminar el reserva',
            error: error.message,
         });
      }
   }

}
