import { Arg, Query, Resolver } from 'type-graphql';
import { FindOperator, getRepository, In } from 'typeorm';
import { FactInterventions } from '../entities/PG/FactInterventions';
import { Buildings } from '../entities/MySQL/Buildings';
import { Employees } from '../entities/MySQL/Employees';

@Resolver()
export class InterventionResolvers {
  @Query(() => FactInterventions)
  async byInterventionId(@Arg('id') id: Number): Promise<FactInterventions> {
    const fact = await getRepository(FactInterventions, 'pg').findOneOrFail({
      where: { id: id },
    });
    const building = await Buildings.find({
      where: {
        id: fact.buildingId,
      },
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
          customer: 'building.customer',
          user: 'customer.user',
        },
      },
    });
    fact.building = building.find(async b => b.id === fact.buildingId);
    fact.employee = await Employees.findOneOrFail({
      where: {
        id: fact.employeeId,
      },
    });
    return fact;
  }

  @Query(() => Buildings)
  async byBuildingId(@Arg('id') id: Number): Promise<Buildings> {
    const building = await Buildings.findOneOrFail({
      where: {
        id: id,
      },
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
          customer: 'building.customer',
          user: 'customer.user',
        },
      },
    });
    const facts = await getRepository(FactInterventions, 'pg').find({
      where: { buildingId: id },
    });

    building.interventions = facts;

    return building;
  }

  @Query(() => Employees)
  async byEmployeeId(@Arg('id') id: Number): Promise<Employees> {
    const facts = await getRepository(FactInterventions, 'pg').find({
      where: { employeeId: id },
    });

    const factIds: any[] | FindOperator<any> = [];

    facts.map(async f => {
      factIds.push(f.buildingId);
    });

    const employee = await Employees.findOneOrFail({ where: { id: id } });

    employee.interventions = facts;

    const buildings = await Buildings.find({
      where: {
        id: In(factIds),
      },
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
          customer: 'building.customer',
          user: 'customer.user',
        },
      },
    });

    facts.forEach(async f => {
      f.building = buildings.find(async b => b.id === f.buildingId);
    });

    employee.interventions = facts;
    return employee;
  }
}
