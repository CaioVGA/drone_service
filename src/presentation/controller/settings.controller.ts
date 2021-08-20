import {
  Body,
  Controller,
  Get, Param,
  Post,
  Res,
} from '@nestjs/common';
import { SettingsModel } from '../../domain/model/settings.model';
import { PostSettingsUsecase } from '../../main/usecase/settings/post-settings.usecase';
import { GetSettingsUsecase } from '../../main/usecase/settings/get-settings.usecase';


@Controller('settings')
export class SettingsController {

  constructor(
    private readonly postStatusUsecase: PostSettingsUsecase,
    private readonly getStatusUsecase: GetSettingsUsecase,
  ){}


  @Post('create-settings/:key_drone')
  async createStatusDrone(@Body() body: SettingsModel, @Param('key_drone') key_drone: number, @Res() response): Promise<any> {
    const result = await this.postStatusUsecase.post(key_drone,body);
    return response.status(result.status).send(result);
  }

  @Get(':key_drone')
  async getStatusDrone( @Param('key_drone') key_drone: number, @Res() response): Promise<any> {
    const result = await this.getStatusUsecase.getStatus(key_drone);
    return response.status(result.status).send(result);
  }

}
