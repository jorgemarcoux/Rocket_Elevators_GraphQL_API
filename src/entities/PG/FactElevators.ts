import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fact_elevators_pkey', ['id'], { unique: true })
@ObjectType()
@Entity('fact_elevators', { database: 'dwh_development', schema: 'public' })
export class FactElevators {
  @Field()
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Field()
  @Column('character varying', { name: 'serial_number', nullable: true })
  serialNumber: string;

  @Field()
  @Column('date', { name: 'date_of_commissioning', nullable: true })
  dateOfCommissioning: string;

  @Field()
  @Column('integer', { name: 'building_id', nullable: true })
  buildingId: number;

  @Field()
  @Column('integer', { name: 'customer_id', nullable: true })
  customerId: number;

  @Field()
  @Column('character varying', { name: 'building_city', nullable: true })
  buildingCity: string;

  @Field()
  @Column('timestamp without time zone', { name: 'created_at' })
  createdAt: Date;

  @Field()
  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;
}