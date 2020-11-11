import { DimCustomers } from '../entities/PG/DimCustomers';
import { Arg, Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';
import { FactElevators } from '../entities/PG/FactElevators';
import { Elevators } from '../entities/MySQL/Elevators';

@Resolver()
export class PGresolver {
  @Query(() => [DimCustomers])
  async getDimCustomers() {
    //syntax to call 2nd DB connection, not necessary for MySQL
    //getRepository(NAME_OF_ENTITY, 'pg').find();
    return await getRepository(DimCustomers, 'pg').find();
  }

  //this query is useless, only made it to figure out how to link stuff from MySQL to PG
  @Query(() => Elevators)
  async getFactual(@Arg('id') id: number) {
    const facts = await getRepository(FactElevators, 'pg').find({
      where: { id: id },
    });
    let elevator = await Elevators.findOneOrFail({
      where: { id: id },
    });
    console.log(facts);

    elevator.facts = facts;

    return elevator;
  }
}
