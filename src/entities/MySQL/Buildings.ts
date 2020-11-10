import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Addresses } from './Addresses';
import { Batteries } from './Batteries';
import { BuildingDetails } from './BuildingDetails';
import { Employees } from './Employees';

@Index('index_buildings_on_address_id', ['addressId'], {})
@Index('index_buildings_on_admin_contact_id', ['adminContactId'], {})
@Index('index_buildings_on_building_detail_id', ['buildingDetailId'], {})
@Index('index_buildings_on_customer_id', ['customerId'], {})
@Index('index_buildings_on_technical_contact_id', ['technicalContactId'], {})
@ObjectType()
@Entity('buildings', { schema: 'app_development' })
export class Buildings extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Field({ nullable: true })
  @Column('bigint', { name: 'customer_id', nullable: true })
  customerId: string;

  @Field({ nullable: true })
  @Column('bigint', { name: 'admin_contact_id', nullable: true })
  adminContactId: string;

  @Field({ nullable: true })
  @Column('bigint', { name: 'technical_contact_id', nullable: true })
  technicalContactId: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'administrator_full_name',
    nullable: true,
    length: 255,
  })
  administratorFullName: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'administrator_email',
    nullable: true,
    length: 255,
  })
  administratorEmail: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'administrator_phone_number',
    nullable: true,
    length: 255,
  })
  administratorPhoneNumber: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'technical_contact_full_name',
    nullable: true,
    length: 255,
  })
  technicalContactFullName: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'technical_contact_email',
    nullable: true,
    length: 255,
  })
  technicalContactEmail: string;

  @Field({ nullable: true })
  @Column('varchar', {
    name: 'technical_contact_phone',
    nullable: true,
    length: 255,
  })
  technicalContactPhone: string;

  @Field()
  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Field()
  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Field({ nullable: true })
  @Column('bigint', { name: 'building_detail_id', nullable: true })
  buildingDetailId: string;

  @Field({ nullable: true })
  @Column('bigint', { name: 'address_id', nullable: true })
  addressId: string;

  @Field(() => [Addresses], { nullable: true })
  @OneToMany(() => Addresses, addresses => addresses.building, { eager: true })
  addresses: Addresses[];

  @Field(() => [BuildingDetails], { nullable: true })
  @OneToMany(
    () => BuildingDetails,
    buildingDetails => buildingDetails.building,
    { eager: true }
  )
  buildingDetails: BuildingDetails[];

  @Field(() => [Employees], { nullable: true })
  @ManyToOne(() => Employees, employees => employees.buildings, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: true,
  })
  @Field(() => Employees, { nullable: true })
  @JoinColumn([{ name: 'admin_contact_id', referencedColumnName: 'id' }])
  adminContact: Employees;

  @Field(() => [Employees], { nullable: true })
  @ManyToOne(() => Employees, employees => employees.buildings2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: true,
  })
  @Field(() => Employees, { nullable: true })
  @JoinColumn([{ name: 'technical_contact_id', referencedColumnName: 'id' }])
  technicalContact: Employees;

  // @Field(() => [Batteries], { nullable: true })
  // @JoinColumn([{ name: 'building_id', referencedColumnName: 'id' }])
  // batteries: Batteries[];

  @Field(() => [Batteries])
  @OneToMany(() => Batteries, batteries => batteries.building, {
    eager: true,
  })
  batteries: Batteries[];
}
