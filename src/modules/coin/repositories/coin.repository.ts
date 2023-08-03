import { EntityRepository, Repository } from 'typeorm';
import { CoinEntity } from '../entities/coin.entity';

@EntityRepository(CoinEntity)
export class CoinRepository extends Repository<CoinEntity> {
  // Реализация дополнительных методов, если нужно
}