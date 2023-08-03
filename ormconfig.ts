

import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

let entities = [__dirname + '/src/modules/**/*.entity{.ts,.js}'];
let migrations = [__dirname + '/src/migrations/*{.ts,.js}'];

if ((module as any).hot) {
    const entityContext = (require as any).context(
        './../../modules',
        true,
        /\.entity\.ts$/,
    );
    entities = entityContext.keys().map((id) => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);
        return entity;
    });
    const migrationContext = (require as any).context(
        './../../migrations',
        false,
        /\.ts$/,
    );
    migrations = migrationContext.keys().map((id) => {
        const migrationModule = migrationContext(id);
        const [migration] = Object.values(migrationModule);
        return migration;
    });
}
console.log(entities)
console.log(migrations)
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  dropSchema: false,
  logging: process.env.NODE_ENV !== 'production',
  entities,
  migrations,

 
});

