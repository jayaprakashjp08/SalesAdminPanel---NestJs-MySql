import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'stock' })
export class Stock {
  @PrimaryGeneratedColumn('increment', {
    name: 'stockId',
    type: 'integer',
  })
  stockId: number;
  @Column({ name: 'wholeSalerId', type: 'integer' })
  wholeSalerId: number;
  @Column({ name: 'retailerId', type: 'integer' })
  retailerId: number;
  @Column({ name: 'stockAmount', type: 'varchar' })
  stockAmount: string;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
  @Column({ name: 'modifiedAt', type: 'timestamp' })
  modifiedAt: Date;
}
