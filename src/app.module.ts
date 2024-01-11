import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config';
import { DatabaseConfig } from './config/db/database.config';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './socket/event.module';
import { UsersModule } from './users/users.module';
import { CompraModule } from './compra/compra.module';
import { BoletosModule } from './boletos/boletos.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    UsersModule,
    CompraModule,
    BoletosModule,
    ConfiguracionModule,
    AuthModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /*{
      provide: 'APP_GUARD',
      useClass: AccessTokenGuard,
    },*/

  ],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
