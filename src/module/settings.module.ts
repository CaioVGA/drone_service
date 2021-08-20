import { Module } from '@nestjs/common';
import { SettingsController } from '../presentation/controller/settings.controller';
import SettingsRepository from '../data/repository/settings/settings.repository';
import { SettingsConverter } from '../main/converter/settings.converter';
import { MySQLForFeature } from '../infra/typeorm/helper/mysql.helper';
import { PostSettingsUsecase } from '../main/usecase/settings/post-settings.usecase';
import { GetSettingsUsecase } from '../main/usecase/settings/get-settings.usecase';
import DroneRepository from '../data/repository/drone/drone.repository';
import { NoMySQLForFeature } from '../infra/typeorm/helper/mongo.helper';

@Module({
  imports: [MySQLForFeature, NoMySQLForFeature],
  controllers: [SettingsController],
  providers: [
    SettingsRepository,
    DroneRepository,
    SettingsConverter,
    PostSettingsUsecase,
    GetSettingsUsecase
  ],
  exports: [],
})
export class SettingsModule {}
