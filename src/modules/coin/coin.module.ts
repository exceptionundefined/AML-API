import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { CoinRepository } from './repositories/coin.repository';
import { CoinEntity } from './entities/coin.entity';
import { CoinGrpcClient } from './grpc/coin.grpc';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoinEntity, CoinRepository]),
  ],
  controllers: [CoinController],
  providers: [CoinService, CoinGrpcClient],
})
export class CoinModule {}