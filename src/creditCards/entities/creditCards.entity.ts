import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreditCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  cardHolder: string;

  @Column()
  expirationMonth: string;

  @Column()
  expirationYear: string;

  @Column()
  ccvCode: string;
}
