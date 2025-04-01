import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainController } from './blockchain/blockchain.controller';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BlockchainController],
  providers: [AppService],
})
export class AppModule {}
