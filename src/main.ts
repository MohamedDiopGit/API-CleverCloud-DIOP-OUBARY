import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { BookModule } from './book.module';

async function bootstrap() {
  const app = await NestFactory.create(BookModule);
  app.useGlobalPipes(new ValidationPipe());
  // const port = process.env.PORT;
  await app.listen(3030);
}
bootstrap();


