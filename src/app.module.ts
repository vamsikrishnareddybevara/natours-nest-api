import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToursModule } from './tours/tours.module';



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
  }), ToursModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
