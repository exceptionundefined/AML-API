import { AbstractEntity } from 'src/common/abstract.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { CoinDto } from '../dtos/coin.dto';

@Entity({ name: 'coin' })
export class CoinEntity extends AbstractEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    value: number;

    toDto() {
        return plainToClass(CoinDto, this);
    }

  // Другие поля сущности (если есть)
}