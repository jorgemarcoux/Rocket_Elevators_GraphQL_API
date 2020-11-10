import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { BuildingDetails } from "./BuildingDetails";
import { Employees } from "./Employees";

@Index("index_buildings_on_address_id", ["addressId"], {})
@Index("index_buildings_on_admin_contact_id", ["adminContactId"], {})
@Index("index_buildings_on_building_detail_id", ["buildingDetailId"], {})
@Index("index_buildings_on_customer_id", ["customerId"], {})
@Index("index_buildings_on_technical_contact_id", ["technicalContactId"], {})
@Entity("buildings", { schema: "app_development" })
export class Buildings {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "customer_id", nullable: true })
  customerId: string | null;

  @Column("bigint", { name: "admin_contact_id", nullable: true })
  adminContactId: string | null;

  @Column("bigint", { name: "technical_contact_id", nullable: true })
  technicalContactId: string | null;

  @Column("varchar", {
    name: "administrator_full_name",
    nullable: true,
    length: 255,
  })
  administratorFullName: string | null;

  @Column("varchar", {
    name: "administrator_email",
    nullable: true,
    length: 255,
  })
  administratorEmail: string | null;

  @Column("varchar", {
    name: "administrator_phone_number",
    nullable: true,
    length: 255,
  })
  administratorPhoneNumber: string | null;

  @Column("varchar", {
    name: "technical_contact_full_name",
    nullable: true,
    length: 255,
  })
  technicalContactFullName: string | null;

  @Column("varchar", {
    name: "technical_contact_email",
    nullable: true,
    length: 255,
  })
  technicalContactEmail: string | null;

  @Column("varchar", {
    name: "technical_contact_phone",
    nullable: true,
    length: 255,
  })
  technicalContactPhone: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "building_detail_id", nullable: true })
  buildingDetailId: string | null;

  @Column("bigint", { name: "address_id", nullable: true })
  addressId: string | null;

  @OneToMany(() => Addresses, (addresses) => addresses.building)
  addresses: Addresses[];

  @OneToMany(
    () => BuildingDetails,
    (buildingDetails) => buildingDetails.building
  )
  buildingDetails: BuildingDetails[];

  @ManyToOne(() => Employees, (employees) => employees.buildings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "admin_contact_id", referencedColumnName: "id" }])
  adminContact: Employees;

  @ManyToOne(() => Employees, (employees) => employees.buildings2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "technical_contact_id", referencedColumnName: "id" }])
  technicalContact: Employees;
}
