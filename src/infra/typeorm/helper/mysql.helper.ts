import { TypeOrmModule } from '@nestjs/typeorm';
import { DroneEntity } from '../../../domain/entity/drone.entity';
import { SettingsEntity } from '../../../domain/entity/settings.entity';



export const MySQLConfigure = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '34.122.226.86',
  port: 3306,
  username: 'airgo-service',
  password: 'bgcv348y7iojufhwcvni87tyw5gtjl4',
  database: 'airgo_database',
  entities: [
    DroneEntity,
    SettingsEntity,
  ],
  synchronize: false,
});

export const MySQLForFeature = TypeOrmModule.forFeature([
  DroneEntity,
  SettingsEntity,
]);

