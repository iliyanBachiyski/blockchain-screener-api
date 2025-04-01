import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoingeckoModule } from 'src/coingecko/coingecko.module';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';
import { BlockchainController } from './blockchain.controller';
import { BlockchainService } from './blockchain.service';
@Module({
  imports: [CoingeckoModule],
  providers: [BlockchainService],
  controllers: [BlockchainController],
})
export class BlockchainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(BlockchainController);
  }
}
