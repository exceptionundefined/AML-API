import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoinRepository } from './repositories/coin.repository';
import { CoinEntity } from './entities/coin.entity';
import { CoinGrpcClient } from './grpc/coin.grpc';
import { CreateCoinDto } from './dtos/create-coin.dto';
import { UpdateCoinDto } from './dtos/update-coin.dto';

@Injectable()
export class CoinService {
  constructor(
    @InjectRepository(CoinRepository)
    private readonly coinRepository: CoinRepository,
    private readonly coinGrpcClient: CoinGrpcClient,
  ) {}

  async create(createCoinDto: CreateCoinDto) {
    // Реализация создания сущности в базе данных с использованием TypeORM репозитория
  }

  async findAll(){
    // Реализация получения всех сущностей из базы данных с использованием TypeORM репозитория
  }

  async findOne(id: number){
    return  {};
    // Реализация поиска одной сущности по ID с использованием TypeORM репозитория
  }

  async update(id: number, updateCoinDto: UpdateCoinDto) {
    // Реализация обновления сущности в базе данных с использованием TypeORM репозитория
  }

  async remove(id: number): Promise<void> {
    // Реализация удаления сущности из базы данных с использованием TypeORM репозитория
  }

  async addTask(task: any): Promise<any> {
    // Вызов gRPC метода на стороннем микросервисе с помощью coinGrpcClient
    return this.coinGrpcClient.addTask(task).toPromise();
  }
}