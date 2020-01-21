import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardsController } from './controllers/creditCards.controller';
import { CreditCardsService } from './services/creditCards.service';
import { CreditCard } from './entities/creditCards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCard])],
  controllers: [CreditCardsController],
  providers: [CreditCardsService],
})
export class CreditCardsModule {

}
