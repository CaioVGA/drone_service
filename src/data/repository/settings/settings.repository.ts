import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SettingsEntity } from '../../../domain/entity/settings.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class SettingsRepository {

  constructor(@InjectRepository(SettingsEntity) private readonly repository: Repository<SettingsEntity>) {}

  /**
   * Inserir Settings de drone
   * @author Tiago Ferreira DídimoR
   */
  async postCreateSettingsDrone(settingsEntity: SettingsEntity): Promise<any> {
    return await this.repository.insert(settingsEntity);
  }

  /**
   * Atualizar Settings de drone
   * @author Tiago Ferreira Dídimo
   */
  async putChangeSettingsDrone(settingsEntity: SettingsEntity): Promise<any> {
    return await this.repository.update(settingsEntity.id_settings, settingsEntity,);
  }

  /**
   * Captura Settings de drone
   * @author Tiago Ferreira Dídimo
   */
  async getAllSettings(): Promise<SettingsEntity[]> {
    return await this.repository.find();
  }

  /**
   * Capturar Settings de drone por chave de drone
   * @author Tiago Ferreira Dídimo
   */
  async getSettingsFKDrone(fk_drone: number): Promise<any> {
    return this.repository.findOne({ fk_drone: fk_drone});
  }

}
