import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DroneEntity } from '../../../domain/entity/drone.entity';

@Injectable()
export default class DroneRepository {

  constructor(@InjectRepository(DroneEntity) private readonly repository: Repository<DroneEntity>) {}

  /**
   * Inserir settings de drone
   * @author Tiago Ferreira Dídimo
   */
  async postCreateDrone(droneEntity: DroneEntity): Promise<any> {
    return await this.repository.insert(droneEntity);
  }

  /**
   * Atualizar dados do drone
   * @author Tiago Ferreira Dídimo
   */
  async putChangeDrone(droneEntity: DroneEntity): Promise<any> {
    return await this.repository.update(droneEntity.id_drone, droneEntity,);
  }

  /**
   * Captura drone
   * @author Tiago Ferreira Dídimo
   */
  async getAllDrones(): Promise<DroneEntity[]> {
    return await this.repository.find();
  }

  /**
   * Capturar informações do drone
   * @author Tiago Ferreira Dídimo
   */
  async getDroneKey(key_drone: number): Promise<DroneEntity> {
    return this.repository.findOne({ key_drone: key_drone});
  }

}
