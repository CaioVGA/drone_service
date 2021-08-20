import { Module } from '@nestjs/common';
import { MySQLForFeature } from '../infra/typeorm/helper/mysql.helper';
import DroneRepository from '../data/repository/drone/drone.repository';
import { PostDroneUsecase } from '../main/usecase/drone/post-drone.usecase';
import { DroneController } from '../presentation/controller/drone.controller';
import { DroneConverter } from '../main/converter/drone.converter';
import { GetDroneUsecase } from '../main/usecase/drone/get-drone.usecase';
import SettingsRepository from '../data/repository/settings/settings.repository';
import { NoMySQLForFeature } from '../infra/typeorm/helper/mongo.helper';

@Module({
  imports: [MySQLForFeature, NoMySQLForFeature],
  controllers: [DroneController],
  providers: [
    DroneRepository,
    GetDroneUsecase,
    SettingsRepository,
    PostDroneUsecase,
    DroneConverter,
  ],
  exports: [],
})
export class DroneModule {}
