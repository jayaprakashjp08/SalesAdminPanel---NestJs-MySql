import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wholeSaler' })
export class WholeSaler {
  @PrimaryGeneratedColumn('increment', { name: 'wholeSalerId', type: 'integer' })
  wholeSalerId: number;
  @Column({ name: 'name', type: 'varchar' })
  name: String;
  @Column({ name: 'mobileNumber', type: 'varchar' })
  mobileNumber: string;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
  @Column({ name: 'modifiedAt', type: 'timestamp' })
  modifiedAt: Date;
}
