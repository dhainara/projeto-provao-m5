import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Provao')
    .setDescription('Prova final realizada para o modulo 5 do curso de F')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('user')
    .addTag('category')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  
  await app.listen(3333);
}
bootstrap();
