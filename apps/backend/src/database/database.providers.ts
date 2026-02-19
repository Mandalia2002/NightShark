
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.POSTGRES_URL_NON_POOLING,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false
        },
        extra: {
          ssl: {
            rejectUnauthorized: false
          }
        }
        // type: 'mysql',
        // host: 'localhost',
        // port: 3306,
        // username: 'root',
        // password: '123456',
        // database: 'nightshark',
        // entities: [
        //     __dirname + '/../**/*.entity{.ts,.js}',
        // ],
        // synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
