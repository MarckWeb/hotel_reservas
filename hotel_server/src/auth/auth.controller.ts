import { Body, Controller, Post, HttpCode, HttpStatus, Res, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login-auth.dto';
import { RegisterAuthDto } from './dtos/register-auth.dtos';
import { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { use } from 'passport';

//El propósito principal de un controlador es manejar las solicitudes HTTP entrantes y enviar las respuestas HTTP correspondientes. Esto puede incluir la validación de datos de entrada, la ejecución de la lógica de la aplicación y la preparación de los datos para ser enviados como respuesta.

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) { }

   @Post('register')
   async registerUser(
      @Body() body: RegisterAuthDto,
      @Res() res: Response) {
      await this.authService.registerUsers(body);

      return res.status(201).json({
         success: true,
         message: "Registro exitoso"
      })

   }

   @HttpCode(HttpStatus.OK)
   //eset guardia utiliza LocalStrategy para verificar credenciales del usuario
   @UseGuards(LocalAuthGuard)
   @Post('login')
   async loginUser(@Request() req, @Res() res: Response,) {
      const user = await this.authService.loginUser(req.body.username, req.body.password);
      return res.send(user)

   }

   @UseGuards(JwtAuthGuard)
   @Get('profile')
   async getProfile(@Request() req) {
      return await req.user;
   }
}
