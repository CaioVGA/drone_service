import { DroneEntity } from '../../domain/entity/drone.entity';
import { DroneModel } from '../../domain/model/drone.model';

export class DroneConverter {

  toEntity(droneModel: DroneModel): DroneEntity {

    const droneEntity = new DroneEntity();
    Object.keys(droneModel).forEach((key) => {
      if( droneModel[key] !== '' || droneModel[key] !== null ) {
        droneEntity[key] = droneModel[key];
      }
    });
    return droneEntity;

  }
}
