import { Controller } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}
  // Ваш код контроллера для обработки HTTP запросов (опущен для краткости)
}