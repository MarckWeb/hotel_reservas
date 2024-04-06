import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from './user.service';
import { Users } from './model/user.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateUserDtos } from './dtos/updateUserDto';

//@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {

   constructor(private readonly usersService: UserService) { }

   //para proteger todas la rutas debemos llevar arriba de todo
   //@UseGuards(JwtAuthGuard)
   @Get()
   getAll(): Promise<Users[]> {
      return this.usersService.getUsersAll();
   }

   @Get(':id')
   async getReservaUser(@Param('id') id: string): Promise<Users> {
      return await this.usersService.getUser(id)
   }

   @Put(':id')
   @UseInterceptors(FileInterceptor('file'))
   async updateUser(
      @Param('id') id: string,
      @Body() body: UpdateUserDtos,
      //queremos extraerlo lo que tiene photo instalando  npm i -D @types/multer
      @UploadedFile() photo: Express.Multer.File,
      @Res() res: Response) {
      try {
         const updatedUser = await this.usersService.updateUser(id, body, photo);

         return res.status(201).json({
            success: true,
            message: "Datos Actualizados",
            user: updatedUser
         })

      } catch (e) {
         console.error(e)
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al actualizar el usuario',
            error: e.message,
         });
      }
   }


   @Delete(':id')
   async deleteUser(@Param('id') id: string, @Res() res: Response) {
      try {
         console.log(id)
         const userToDelete = await this.usersService.deleteUser(id);
         return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Usuario eliminado',
            user: userToDelete
         });
      } catch (error) {
         return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: 'Error al eliminar el usuario',
            error: error.message,
         });
      }
   }



}
