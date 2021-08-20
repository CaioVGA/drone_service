import { Body, Controller, Get, Param, Post, Res,} from '@nestjs/common';
import { DroneModel } from '../../domain/model/drone.model';
import { PostDroneUsecase } from '../../main/usecase/drone/post-drone.usecase';
import { GetDroneUsecase } from '../../main/usecase/drone/get-drone.usecase';


@Controller('drone')
export class DroneController {

  constructor(
    private readonly postDroneUsecase: PostDroneUsecase,
    private readonly getDroneUsecase: GetDroneUsecase,
  ) {}


  @Post('')
  async createStatusDrone(@Body() body: DroneModel, @Res() response): Promise<any> {
    const result = await this.postDroneUsecase.post(body);
    return response.status(result.status).send(result);
  }

  @Get(':key_drone')
  async getStatusDrone( @Param('key_drone') key_drone: number, @Res() response): Promise<any> {
    const result = await this.getDroneUsecase.get(key_drone);
    return response.status(result.status).send(result);
  }

}
