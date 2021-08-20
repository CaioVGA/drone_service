import { Injectable } from '@nestjs/common';
import SettingsRepository from '../../../data/repository/settings/settings.repository';
import { ResponseProtocol } from '../../../domain/protocol/response.protocol';
import DroneRepository from '../../../data/repository/drone/drone.repository';


@Injectable()
export class GetDroneUsecase {

  constructor(
    private readonly statusRepository: SettingsRepository,
    private readonly droneRepository: DroneRepository,
  ) {}

  async get(key_drone: number): Promise<ResponseProtocol> {

    try {
      const entity_drone = await  this.droneRepository.getDroneKey(key_drone);
      if(!entity_drone){
        return new ResponseProtocol(400, 'Não existe esse settings na base de dados.', 'Não existe settings na base de dados.');
      }
      return new ResponseProtocol(200, entity_drone);
    } catch (error) {
      return new ResponseProtocol(400, 'Ocorreu um imprevisto, tente novamente.', error.toString());
    }

  }

}
