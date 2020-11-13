import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_leads_on_user_id', ['userId'], {})
@Entity('leads', { schema: process.env.MYSQLDB })
export class Leads {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'full_name', nullable: true, length: 255 })
  fullName: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 255 })
  phone: string | null;

  @Column('varchar', { name: 'business_name', nullable: true, length: 255 })
  businessName: string | null;

  @Column('varchar', { name: 'project_name', nullable: true, length: 255 })
  projectName: string | null;

  @Column('varchar', { name: 'department', nullable: true, length: 255 })
  department: string | null;

  @Column('text', { name: 'project_description', nullable: true })
  projectDescription: string | null;

  @Column('text', { name: 'message', nullable: true })
  message: string | null;

  @Column('varchar', { name: 'attachment', nullable: true, length: 255 })
  attachment: string | null;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
