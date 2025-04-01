import { Controller, Get } from '@nestjs/common';

@Controller('blockchain')
export class BlockchainController {
  @Get()
  sayHello(): string {
    return 'Hello World';
  }
  @Get('exchanges')
  getExchanges(): string {
    return 'Exchanges';
  }
}
