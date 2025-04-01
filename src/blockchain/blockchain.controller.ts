import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { Exchange } from 'src/coingecko/types/exchange';
import { BlockchainService } from './blockchain.service';
@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}
  @Get('exchanges')
  getExchanges(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('perPage', new DefaultValuePipe(50), ParseIntPipe) perPage: number,
  ): Promise<Exchange[]> {
    return this.blockchainService.getExchanges(page, perPage);
  }
}
