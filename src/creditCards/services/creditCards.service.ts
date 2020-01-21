import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCard } from '../entities/creditCards.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CreditCardsService {
  constructor(@InjectRepository(CreditCard) private readonly creditCardsRepository: Repository<CreditCard>) {
  }

  async findAllCreditCards(): Promise<CreditCard[]> {
    return this.creditCardsRepository.find();
  }

  async addNewCreditCard(card: CreditCard): Promise<CreditCard> {
    return this.creditCardsRepository.save(card);
  }
}
