import { registerAs } from '@nestjs/config';
import * as path from 'path';
import * as dotenv from 'dotenv';

const srcPath = path.resolve(__dirname, 'src');
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PWD || 'root',
  database: process.env.DATABASE_NAME || 'gerec',
  schema: process.env.DATABASE_SCHEMA || 'gerec',
  entities: [path.resolve(srcPath, '**', '*.entity{.ts,.js}')],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
}));
