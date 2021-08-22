import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../**/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  // ssl: {
  //   ca: fs.readFileSync(__dirname + '/rds-ca-2019-root.pem')
  // },
  // logging: ["query", "error"],
  cli: {
    migrationsDir: 'migrations',
  },
};