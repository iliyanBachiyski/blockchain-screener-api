import { Controller, Get, Query } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { Exchange } from 'src/coingecko/types/exchange';
@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}
  @Get('exchanges')
  getExchanges(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 100,
  ): Promise<Exchange[]> {
    return this.blockchainService.getExchanges(page, perPage);
  }
}
