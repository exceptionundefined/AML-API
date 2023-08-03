import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { AbstractDto } from '../../../common/dto/abstract.dto';

@Exclude()
export class CoinDto extends AbstractDto {
    @Expose()
    @IsString()
    @ApiProperty()
    readonly id!: string;

    @Expose()
    @IsString()
    @ApiProperty()
    readonly name!: string;

    @Expose()
    @IsString()
    @ApiProperty()
    readonly value!: string;

}
