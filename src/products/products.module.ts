import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoes } from './entities/shoes..entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shoes])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {
}
