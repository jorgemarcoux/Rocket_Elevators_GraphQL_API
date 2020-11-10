import { DimCustomers } from '../entities/PG/DimCustomers';
import { Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

@Resolver()
export class PGresolver {
  @Query(() => [DimCustomers])
  async getDimCustomers() {
    //syntax to call 2nd DB connection, not necessary for MySQL
    //getRepository(NAME_OF_ENTITY, 'pg').find();
    return await getRepository(DimCustomers, 'pg').find();
  }
}
