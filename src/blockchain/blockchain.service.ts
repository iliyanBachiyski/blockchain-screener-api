import { Injectable } from '@nestjs/common';
import { CoingeckoService } from 'src/coingecko/coingecko.service';
import { Exchange } from 'src/coingecko/types/exchange';

@Injectable()
export class BlockchainService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  async getExchanges(page: number, perPage: number): Promise<Exchange[]> {
    return this.coingeckoService.getExchanges(page, perPage);
  }
}
