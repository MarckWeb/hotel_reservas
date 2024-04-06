import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { RoomService } from './room.service';
import { Response } from 'express';
import { CreateRoomDto } from './dto/createRoomDto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('room')
export class RoomController {

   constructor(private readonly roomService: RoomService) { }

   @Get()
   async getAllRoom(@Res() res: Response) {
      try {
         const rooms = await this.roomService.getAllRoom()
         return res.status(HttpStatus.OK).send(rooms);
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error al obtener los habitaciones',
            error: error.message
         });
      }
   }

   @Get(':id')
   async getRoom(@Param('id') id: string, @Res() res: Response) {
      try {
         const room = await this.roomService.getRoom(id)
         return res.status(HttpStatus.OK).send(room);
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error al obtener la habitacion',
            error: error.message
         });
      }
   }

   @Post()
   @UseInterceptors(FileFieldsInterceptor([
      { name: 'images', maxCount: 4 },
      { name: 'image', maxCount: 1 },
   ]))
   // @UseInterceptors(FileInterceptor('image'))
   async createRoom(

      @Body() body: CreateRoomDto,
      @Res() res: Response,
      @UploadedFiles() files: { images?: Express.Multer.File[], image?: Express.Multer.File }
   ) {
      try {

         const images = files.images;
         const image = files.image;

         await this.roomService.createRoom(body, images, image);

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
   @UseInterceptors(FileInterceptor('image'))
   async updateUser(
      @Param('id') id: string,
      @Body() body: CreateRoomDto,
      @UploadedFile() image: Express.Multer.File,
      @Res() res: Response) {
      try {
         console.log(image)
         const updatedUser = await this.roomService.updateRoom(id, body, image);
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
   async deleteRoom(@Param('id') id: number, @Res() res: Response) {
      try {
         const roomToDelete = await this.roomService.deleteRoom(id);
         return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Usuario eliminado',
            user: roomToDelete
         });
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al eliminar el room',
            error: error.message,
         });
      }
   }


}
