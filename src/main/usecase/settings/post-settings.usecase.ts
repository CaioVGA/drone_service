import { Injectable } from '@nestjs/common';
import { SettingsModel } from '../../../domain/model/settings.model';
import SettingsRepository from '../../../data/repository/settings/settings.repository';
import { SettingsConverter } from '../../converter/settings.converter';
import { ResponseProtocol } from '../../../domain/protocol/response.protocol';
import DroneRepository from '../../../data/repository/drone/drone.repository';

@Injectable()
export class PostSettingsUsecase {

  constructor(
    private readonly statusRepository: SettingsRepository,
    private readonly droneRepository: DroneRepository,
    private readonly settingsConverter: SettingsConverter,
  ) {}


  /**
   * @author Tiago Ferreira Dídimo
   * @param statusModel
   */
  async post(key_drone: number, settingsModel: SettingsModel): Promise<ResponseProtocol> {

    try {
      const entity_drone = await this.droneRepository.getDroneKey(key_drone);
      settingsModel.fk_drone = entity_drone.id_drone;
      await this.statusRepository.postCreateSettingsDrone(this.settingsConverter.toEntity(settingsModel));
      return new ResponseProtocol(200, 'Status cadastrado com sucesso!');
    } catch (error) {
      return new ResponseProtocol(400, 'Ocorreu um imprevisto, ao cadastrar settings.', error.toString());
    }
  }
}
