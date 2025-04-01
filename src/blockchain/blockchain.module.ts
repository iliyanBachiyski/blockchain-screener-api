import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { CoingeckoModule } from 'src/coingecko/coingecko.module';
@Module({
  imports: [CoingeckoModule],
  providers: [BlockchainService],
  controllers: [BlockchainController],
})
export class BlockchainModule {}
