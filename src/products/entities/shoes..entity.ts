import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Shoes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productColor: string;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @Column()
  productSize: string;
}
