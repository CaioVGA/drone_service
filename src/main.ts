import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap(PORT) {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(PORT);
}

const PORT = 3100;
console.log(`Servidor inicia na porta: ${PORT}`);

bootstrap(PORT);
