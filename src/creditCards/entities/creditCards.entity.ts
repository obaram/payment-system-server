import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreditCards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  cardHolder: string;

  @Column()
  expiredDate: string;

  @Column()
  ccvCode: string;
}
