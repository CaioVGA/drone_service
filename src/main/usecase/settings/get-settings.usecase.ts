import { Injectable } from '@nestjs/common';
import SettingsRepository from '../../../data/repository/settings/settings.repository';
import { ResponseProtocol } from '../../../domain/protocol/response.protocol';
import DroneRepository from '../../../data/repository/drone/drone.repository';


@Injectable()
export class GetSettingsUsecase {

  constructor(
    private readonly statusRepository: SettingsRepository,
    private readonly droneRepository: DroneRepository,
  ) {}

  async getStatus(key_drone: number): Promise<ResponseProtocol> {

    try {
      const entity_drone = await  this.droneRepository.getDroneKey(key_drone);
      const entity = await this.statusRepository.getSettingsFKDrone(entity_drone.id_drone);
      if(!entity){
        return new ResponseProtocol(400, 'Não existe esse settings na base de dados.', 'Não existe settings na base de dados.');
      }
      return new ResponseProtocol(200, entity);
    } catch (error) {
      return new ResponseProtocol(400, 'Ocorreu um imprevisto, tente novamente.', error.toString());
    }

  }

}
