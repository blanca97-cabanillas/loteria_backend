import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './filters/exception.filter';
import * as path from 'path';
const express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User Control API')
    .setDescription('Access & Control user')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // Use custom errors & logger
  app.useGlobalFilters(new CustomExceptionFilter());

  app.enableCors();
  app.use('/upload', express.static(path.join(process.cwd(), 'upload')));
  
  await app.listen(AppModule.port);
}
bootstrap();
