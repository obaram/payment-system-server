import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreditCardsService } from '../services/creditCards.service';
import { CreditCard } from '../entities/creditCards.entity';

@Controller('creditcards')
export class CreditCardsController {
  constructor(private readonly cardsService: CreditCardsService) {
  }

  @Get()
  async findAllCreditCards(): Promise<CreditCard[]> {
    return await this.cardsService.findAllCreditCards();
  }

  @Post('/add')
  addNewCreditCard(@Body() data: CreditCard): Promise<CreditCard> {
    return this.cardsService.addNewCreditCard(data);
  }
}
