import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_columns_on_battery_id", ["batteryId"], {})
@Entity("columns", { schema: "app_development" })
export class Columns {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "battery_id", nullable: true })
  batteryId: string | null;

  @Column("varchar", { name: "column_type", nullable: true, length: 255 })
  columnType: string | null;

  @Column("varchar", { name: "column_status", nullable: true, length: 255 })
  columnStatus: string | null;

  @Column("int", { name: "number_of_floors_served", nullable: true })
  numberOfFloorsServed: number | null;

  @Column("varchar", { name: "information", nullable: true, length: 255 })
  information: string | null;

  @Column("varchar", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
