import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Buildings } from './Buildings';

@Index('index_employees_on_user_id', ['userId'], {})
@ObjectType()
@Entity('employees', { schema: 'app_development' })
export class Employees {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'first_name', nullable: true, length: 255 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 255 })
  lastName: string | null;

  @Column('varchar', { name: 'function', nullable: true, length: 255 })
  function: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 255 })
  phone: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @OneToMany(() => Buildings, buildings => buildings.adminContact)
  buildings: Buildings[];

  @OneToMany(() => Buildings, buildings => buildings.technicalContact)
  buildings2: Buildings[];
}
