import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoes } from '../entities/shoes..entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Shoes) private readonly shoesRepository: Repository<Shoes>) {
  }

  async findAllShoes(): Promise<Shoes[]> {
    return await this.shoesRepository.find();
  }

}
