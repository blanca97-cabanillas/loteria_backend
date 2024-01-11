import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { BusinessException } from 'src/business.exception';
import { HttpStatus } from '@nestjs/common/enums';
import { randomTemporalPassword } from 'src/helper/ramdomid.helper';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  loginUsuario(body): Promise<User> {
    console.log(body);
    return this.userRepository.findOne({ where: { username: body.usuario, password: body.password } });
  }
}
