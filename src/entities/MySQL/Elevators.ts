import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_elevators_on_column_id", ["columnId"], {})
@Entity("elevators", { schema: "app_development" })
export class Elevators {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "column_id", nullable: true })
  columnId: string | null;

  @Column("varchar", { name: "serial_number", nullable: true, length: 255 })
  serialNumber: string | null;

  @Column("varchar", { name: "elevator_model", nullable: true, length: 255 })
  elevatorModel: string | null;

  @Column("varchar", { name: "elevator_type", nullable: true, length: 255 })
  elevatorType: string | null;

  @Column("varchar", { name: "elevator_status", nullable: true, length: 255 })
  elevatorStatus: string | null;

  @Column("date", { name: "date_of_commissioning", nullable: true })
  dateOfCommissioning: string | null;

  @Column("date", { name: "date_of_last_inspection", nullable: true })
  dateOfLastInspection: string | null;

  @Column("varchar", {
    name: "certificate_of_inspection",
    nullable: true,
    length: 255,
  })
  certificateOfInspection: string | null;

  @Column("varchar", { name: "information", nullable: true, length: 255 })
  information: string | null;

  @Column("varchar", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
