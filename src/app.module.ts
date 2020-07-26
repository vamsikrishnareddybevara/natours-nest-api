import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }), 
  MongooseModule.forRoot(process.env.DATABASE,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
