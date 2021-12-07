import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiParam, ApiBody} from '@nestjs/swagger'
import { WholeSaler } from './models/wholeSaler.entity';


@Controller('salesAdminPanel')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/wholeSaler/{wholeSalerId}')
  @ApiParam({name:'wholeSalerId', type:'number'})
  getWholeSalerDetails(@Param() wholeSalerId : number): Promise<any> {
    return this.appService.getWholeSalerDetails(wholeSalerId);
  }
}

