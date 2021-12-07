import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WholeSaler } from './models/wholeSaler.entity';
import { Retailer } from './models/retailer.entity';
import { Stock } from './models/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { query } from './queries/query';
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
      const details = await this.wholeSalerRepository.query(
        query.getWholeSalerDetails,
        [wholeSalerId],
      );

      const wholeSaler: any = {
        wholeSalerName: details[0].wholeSalerName,
        wholeSalerMobileNumber: details[0].wholeSalerMobileNumber,
      };
      const retailers = [];
      details.forEach((item) => {
        retailers.push({
          retailerName: item.retailerName,
          retailerMobileNumber: item.retailerMobileNumber,
        });
      });
      wholeSaler.retailers = retailers;
      return {
        status: true,
        code: HttpStatus.OK,
        message: 'Got Successfully',
        data: wholeSaler,
      };
    } catch (e) {
      return new HttpException(
        { message: e },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getSingleWholeSaler(): Promise<any> {
    try {
      const singleWholeSalers = await this.stockRepository.query(
        query.getSingleWholeSaler,
      );
      return {
        status: true,
        code: HttpStatus.OK,
        message: 'Got Successfully',
        data: singleWholeSalers,
      };
    } catch (e) {
      return new HttpException(
        { message: e },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTotalMonthlyTurnOver(): Promise<any> {
    try {
      const monthlyTurnOver = await this.stockRepository.query(
        query.getMonthlyTurnOver,
      );
      const result = monthlyTurnOver.reduce((element, value) => {
        element[value.wholeSalerName] = element[value.wholeSalerName] || [];
        element[value.wholeSalerName].push(value);
        delete value.wholeSalerName;
        return element;
      }, Object.create(null));

      return {
        status: true,
        code: HttpStatus.OK,
        message: 'Got Successfully',
        data: result,
      };
    } catch (e) {
      return new HttpException(
        { message: e },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
