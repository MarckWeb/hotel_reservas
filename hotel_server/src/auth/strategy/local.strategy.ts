import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Users } from "src/user/model/user.schema";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      super();
   }

   async validate(username: string, password: string): Promise<Users> {
      const user = await this.authService.loginUser(username, password);

      if (!user) {
         throw new UnauthorizedException();
      }

      return user
   }
}