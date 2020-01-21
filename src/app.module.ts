import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardsModule } from './creditCards/creditCards.module';

@Module({
  imports: [ProductsModule,
    CreditCardsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Jaszczew91',
      database: 'payment_system_dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
