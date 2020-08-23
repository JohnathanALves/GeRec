import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from './naming.strategy';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PWD || 'root',
  database: process.env.DATABASE_NAME || 'gerec',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
  namingStrategy: new SnakeNamingStrategy(),
}));
