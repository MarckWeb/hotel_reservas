import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { comparePassword, encryptPassword } from 'src/utils/generateBcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterAuthDto } from './dtos/register-auth.dtos';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, Users } from 'src/user/model/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login-auth.dto';

@Injectable()
export class AuthService {
   constructor(
      private usersService: UserService,
      private jwtService: JwtService,
      @InjectModel(Users.name) private readonly usersModel: Model<UserDocument>
   ) { }

   async loginUser(username: string, passwordPlain: string): Promise<LoginDto | any> {

      const userExist = await this.usersModel.findOne({ username });

      if (!userExist) {
         return new HttpException('usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      const isCheck = await comparePassword(passwordPlain, userExist.password)

      if (!isCheck) {
         return new HttpException('contraseña incorrecta', HttpStatus.UNAUTHORIZED);
      }

      const { password, ...result } = userExist.toObject();

      const payload = {
         id: result._id,
      }

      const token = this.jwtService.sign(payload)
      const data = {
         user: result._id,
         token
      }

      return data;
   }

   async registerUsers(body: RegisterAuthDto) {
      const { name, username, password } = body
      const passwordHash = await encryptPassword(password, 8)

      const newUser = {
         name,
         username,
         password: passwordHash
      }

      if (newUser.password) {
         const createNewUser = this.usersModel.create(newUser)
         return await createNewUser
      }
   }
}

