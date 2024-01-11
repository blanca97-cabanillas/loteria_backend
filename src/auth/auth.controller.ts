import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { Public } from 'src/common/public-decorator';
import { AuthService } from './auth.service';
import { AccessTokenGuard } from './guards/access-token.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // Servicios para agregar las compras a cada rifa
  @Post('login-usuario')
  loginUser(@Body() body: any): Promise<any> {
    return this.authService.loginUsuario(body);
  }


}