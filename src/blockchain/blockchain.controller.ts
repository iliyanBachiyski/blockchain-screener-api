import { Controller, Get } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { Exchange } from 'src/coingecko/types/exchange';
@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}
  @Get('exchanges')
  getExchanges(): Promise<Exchange[]> {
    return this.blockchainService.getExchanges();
  }
}
