import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('salesAdminPanel')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getWholeSalerDetails/:wholeSalerId')
  @ApiParam({ name: 'wholeSalerId', type: 'number' })
  getWholeSalerDetails(@Param() params: any): Promise<any> {
    return this.appService.getWholeSalerDetails(params.wholeSalerId);
  }

  @Get('/getSingleWholeSaler')
  getSingleWholeSaler(): Promise<any> {
    return this.appService.getSingleWholeSaler();
  }

  @Get('/getTotalMonthlyTurnOver')
  getTotalMonthlyTurnOver(): Promise<any> {
    return this.appService.getTotalMonthlyTurnOver();
  }

  @Get('/getMaximumMonthlyTurnOver')
  getMaximumMonthlyTurnOver(): Promise<any> {
    return this.appService.getMaximumMonthlyTurnOver();
  }
}
