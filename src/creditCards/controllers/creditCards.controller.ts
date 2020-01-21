import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreditCardsService } from '../services/creditCards.service';
import { CreditCards } from '../entities/creditCards.entity';

@Controller('creditcards')
export class CreditCardsController {
  constructor(private readonly cardsService: CreditCardsService) {
  }

  @Get()
  async findAllCreditCards(): Promise<CreditCards[]> {
    return await this.cardsService.findAllCreditCards();
  }

  @Post('/add')
  addNewCreditCard(@Body() data: CreditCards): Promise<CreditCards> {
    return this.cardsService.addNewCreditCard(data);
  }
}
