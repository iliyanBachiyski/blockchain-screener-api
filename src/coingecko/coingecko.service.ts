import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Exchange } from './types/exchange';

@Injectable()
export class CoingeckoService {
  private coingeckoApiUrl: string;
  private API_KEY: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.coingeckoApiUrl = this.configService.get('COINGECKO_API_URL', '');
    this.API_KEY = this.configService.get('COINGECKO_API_KEY', '');
  }

  async getExchanges() {
    const response = await this.httpService.axiosRef.get<Exchange[]>(
      `${this.coingeckoApiUrl}/exchanges`,
      {
        headers: { 'x-cg-demo-api-key': this.API_KEY },
      },
    );
    return response.data;
  }
}
