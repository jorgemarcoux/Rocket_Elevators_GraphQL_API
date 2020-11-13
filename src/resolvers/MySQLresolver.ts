import { Addresses } from '../entities/MySQL/Addresses';
import { Buildings } from '../entities/MySQL/Buildings';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class MySQLresolver {
  //.find returns all
  @Query(() => [Addresses])
  addresses() {
    return Addresses.find();
  }

  @Query(() => Buildings)
  async getBuildingByID(@Arg('id') id: Number): Promise<Buildings> {
    return Buildings.findOneOrFail({ where: { id: id } });
  }

  @Query(() => [Buildings])
  buildings() {
    return Buildings.find({
      join: {
        alias: 'building',
        leftJoinAndSelect: {
          buildingDetails: 'building.buildingDetails',
          adminContact: 'building.adminContact',
          technicalContact: 'building.technicalContact',
          address: 'building.address',
          batteries: 'building.batteries',
          columns: 'batteries.columns',
          elevators: 'columns.elevators',
        },
      },
    });
  }
}
