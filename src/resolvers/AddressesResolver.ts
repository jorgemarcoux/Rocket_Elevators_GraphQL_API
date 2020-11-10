import { Addresses } from '../entities/MySQL/Addresses';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class AddressesResolver {
  //.find returns all
  @Query(() => [Addresses])
  addresses() {
    return Addresses.find();
  }
  @Query(() => Addresses)
  first() {
    return Addresses.findOne();
  }
}
