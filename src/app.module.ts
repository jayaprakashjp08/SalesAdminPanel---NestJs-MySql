import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './Db/database';
import { WholeSaler } from './models/wholeSaler.entity';
import { Retailer } from './models/retailer.entity';
import { Stock } from './models/stock.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WholeSaler, Retailer, Stock]),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
