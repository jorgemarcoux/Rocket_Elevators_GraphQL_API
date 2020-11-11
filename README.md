# Let's get factual
you can find all the queries to answer the factIntervation related questions here => https://github.com/jorgemarcoux/Rocket_Elevators_GraphQL_API/blob/master/queries.md

if you aren't familiar with the requirements, they were the following:

- Retrieving the address of the building, the beginning and the end of the intervention for a specific intervention.
- Retrieving customer information and the list of interventions that took place for a specific building
- Retrieval of all interventions carried out by a specified employee with the buildings associated with these interventions including the details (Table BuildingDetails) associated with these buildings.

These questions had to be answered as part of the week 8 of the CodeBoxx bootcamp.


### info needed to set things up

- install Yarn to manage deps => https://classic.yarnpkg.com/en/
- after Yarn is installed, run this command from the project directory: `yarn install`
- create a file called 'ormconfig.js' in the root folder
- put this stuff in the file, replace the missing credentials with yours - note: 'database' is the name of the database (app_development, dwh_development, etc.):
  
```javascript
 module.exports = [
  {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'foo',
    password: 'bar',
    database: 'baz', 
    synchronize: false,
    logging: true,
    entities: ['./src/entities/MySQL/*.*'],
  },
  {
    name: 'pg',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bob',
    password: 'bobby',
    database: 'bob_bobbyson',
    schema: 'public',
    synchronize: false,
    logging: true,
    entities: ['./src/entities/PG/*.*'],
  },
]
```

- you should now be able to run the server, open your terminal and type in `yarn start`
- assuming things go well, http://localhost:4000/graphql will allow you to query the DBs
- please note that not all tables can be queried, there's no point in setting all of them up since we will only use one with GraphQL
- once you're at this step, you can click on the vertical DOCS button on the localhost page to see what can be queried
- sample query:

![query](https://i.gyazo.com/5a4396ba82c8466127666c93b3144023.png)

