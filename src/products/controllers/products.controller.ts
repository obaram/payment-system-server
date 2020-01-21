import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Shoes } from '../entities/shoes..entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {
  }

  @Get('shoes')
  findAllShoes(): Promise<Shoes[]> {
    return this.products.findAllShoes();
  }
}
