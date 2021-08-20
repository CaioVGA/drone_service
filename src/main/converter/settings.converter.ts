import { SettingsEntity } from '../../domain/entity/settings.entity';
import { SettingsModel } from '../../domain/model/settings.model';
import { DroneEntity } from '../../domain/entity/drone.entity';

export class SettingsConverter {

  toEntity(settingsModel: SettingsModel): SettingsEntity {

    const settingsEntity = new SettingsEntity();
    Object.keys(settingsModel).forEach((key) => {
      if( settingsModel[key] !== '' || settingsModel[key] !== null ) {
        settingsEntity[key] = settingsModel[key];
      }
    });
    return settingsEntity;
  }
}
