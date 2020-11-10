import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_batteries_on_building_id", ["buildingId"], {})
@Index("index_batteries_on_employee_id", ["employeeId"], {})
@Entity("batteries", { schema: "app_development" })
export class Batteries {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "building_id", nullable: true })
  buildingId: string | null;

  @Column("bigint", { name: "employee_id", nullable: true })
  employeeId: string | null;

  @Column("varchar", { name: "battery_type", nullable: true, length: 255 })
  batteryType: string | null;

  @Column("varchar", { name: "battery_status", nullable: true, length: 255 })
  batteryStatus: string | null;

  @Column("date", { name: "date_of_commissioning", nullable: true })
  dateOfCommissioning: string | null;

  @Column("date", { name: "date_of_last_inspection", nullable: true })
  dateOfLastInspection: string | null;

  @Column("varchar", {
    name: "certificate_of_operations",
    nullable: true,
    length: 255,
  })
  certificateOfOperations: string | null;

  @Column("varchar", { name: "information", nullable: true, length: 255 })
  information: string | null;

  @Column("varchar", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
