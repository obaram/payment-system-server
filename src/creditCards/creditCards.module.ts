import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardsController } from './controllers/creditCards.controller';
import { CreditCardsService } from './services/creditCards.service';
import { CreditCards } from './entities/creditCards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCards])],
  controllers: [CreditCardsController],
  providers: [CreditCardsService],
})
export class CreditCardsModule {

}
