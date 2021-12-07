import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WholeSaler } from './models/wholeSaler.entity';
import { Retailer } from './models/retailer.entity';
import { Stock } from './models/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(WholeSaler)
    private readonly wholeSalerRepository: Repository<WholeSaler>,
    @InjectRepository(Retailer)
    private readonly retailerRepository: Repository<Retailer>,
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
  ) {}
  async getWholeSalerDetails(wholeSalerId: number): Promise<any> {
    try {
      const details = await this.wholeSalerRepository.find({
        wholeSalerId: wholeSalerId,
      });
    } catch (e) {
      return new HttpException(
        { message: e },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
