import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCards } from '../entities/creditCards.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CreditCardsService {
  constructor(@InjectRepository(CreditCards) private readonly creditCardsRepository: Repository<CreditCards>) {
  }

  async findAllCreditCards(): Promise<CreditCards[]> {
    return this.creditCardsRepository.find();
  }

  async addNewCreditCard(card: CreditCards): Promise<CreditCards> {
    return this.creditCardsRepository.save(card);
  }
}
