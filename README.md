### info needed to set things up

- install Yarn to manage deps => https://classic.yarnpkg.com/en/
- after Yarn is installed, run this command from the project directory: `yarn install`
- create a file called 'ormconfig.js' in the root folder
- put this stuff in the file, replace the missing credentials with yours - note: 'database' is the name of the database (app_development, dwh_development, etc.):

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

- you should now be able to run the server, open your terminal and type in `yarn start`
- assuming things go well, http://localhost:4000/graphql will allow you to query the DBs
- please note that not all tables can be queried, there's no point in setting all of them up since we will only use one with GraphQL
