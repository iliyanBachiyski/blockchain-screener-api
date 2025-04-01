import { BadRequestException, Injectable } from '@nestjs/common';
import { CoingeckoService } from 'src/coingecko/coingecko.service';
import { Exchange } from 'src/coingecko/types/exchange';

@Injectable()
export class BlockchainService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  async getExchanges(page: number, perPage: number): Promise<Exchange[]> {
    if (page < 1 || perPage < 1) {
      throw new BadRequestException('Page and perPage must be greater than 0');
    }
    return this.coingeckoService.getExchanges(page, perPage);
  }
}
