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
  @Query(() => Addresses)
  first() {
    return Addresses.findOne();
  }

  @Query(() => Buildings)
  async getBuildingInfo(@Arg('id') id: Number): Promise<Buildings> {
    return Buildings.findOneOrFail({ where: { id: id } });
  }

  @Query(() => [Buildings])
  buildings() {
    return Buildings.find();
  }
}
