import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Buildings } from "./Buildings";

@Index("index_building_details_on_building_id", ["buildingId"], {})
@Entity("building_details", { schema: "app_development" })
export class BuildingDetails {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "building_id", nullable: true })
  buildingId: string | null;

  @Column("varchar", { name: "information_key", nullable: true, length: 255 })
  informationKey: string | null;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Buildings, (buildings) => buildings.buildingDetails, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "building_id", referencedColumnName: "id" }])
  building: Buildings;
}
