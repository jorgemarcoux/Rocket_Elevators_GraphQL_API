import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";

@Index("index_customers_on_address_id", ["addressId"], {})
@Index("index_customers_on_user_id", ["userId"], {})
@Entity("customers", { schema: "app_development" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("varchar", { name: "company_name", nullable: true, length: 255 })
  companyName: string | null;

  @Column("varchar", {
    name: "company_contact_full_name",
    nullable: true,
    length: 255,
  })
  companyContactFullName: string | null;

  @Column("varchar", {
    name: "company_contact_phone",
    nullable: true,
    length: 255,
  })
  companyContactPhone: string | null;

  @Column("varchar", {
    name: "company_contact_email",
    nullable: true,
    length: 255,
  })
  companyContactEmail: string | null;

  @Column("varchar", {
    name: "company_description",
    nullable: true,
    length: 255,
  })
  companyDescription: string | null;

  @Column("varchar", {
    name: "technical_authority_full_name",
    nullable: true,
    length: 255,
  })
  technicalAuthorityFullName: string | null;

  @Column("varchar", {
    name: "technical_authority_phone_number",
    nullable: true,
    length: 255,
  })
  technicalAuthorityPhoneNumber: string | null;

  @Column("varchar", {
    name: "technical_manager_email_service",
    nullable: true,
    length: 255,
  })
  technicalManagerEmailService: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "address_id", nullable: true })
  addressId: string | null;

  @OneToMany(() => Addresses, (addresses) => addresses.customer)
  addresses: Addresses[];
}
