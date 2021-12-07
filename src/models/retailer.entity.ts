import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'retailer' })
export class Retailer {
  @PrimaryGeneratedColumn('increment', { name: 'retailerId', type: 'integer' })
  retailerId: number;
  @Column({ name: 'name', type: 'varchar' })
  name: String;
  @Column({ name: 'mobileNumber', type: 'varchar' })
  mobileNumber: string;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
  @Column({ name: 'modifiedAt', type: 'timestamp' })
  modifiedAt: Date;
}
