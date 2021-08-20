import { Injectable } from '@nestjs/common';
import { ResponseProtocol } from '../../../domain/protocol/response.protocol';
import DroneRepository from '../../../data/repository/drone/drone.repository';
import { DroneModel } from '../../../domain/model/drone.model';
import { DroneConverter } from '../../converter/drone.converter';

@Injectable()
export class PostDroneUsecase {

  constructor(
    private readonly droneRepository: DroneRepository,
    private readonly droneConverter: DroneConverter,
  ) {}


  /**
   * @author Tiago Ferreira Dídimo
   * @param droneModel
   */
  async post(droneModel: DroneModel): Promise<ResponseProtocol> {

    try {
      await this.droneRepository.postCreateDrone(this.droneConverter.toEntity(droneModel));
      return new ResponseProtocol(200, 'Drone cadastrado com sucesso!');
    } catch (error) {
      return new ResponseProtocol(400, 'Ocorreu um imprevisto, ao cadastrar drone.', error.toString());
    }
  }
}
