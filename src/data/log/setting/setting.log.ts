import { Injectable } from '@nestjs/common';
import { LogSetting } from '../../../domain/schema/log-setting.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export default class SettingLog {

  constructor( @InjectModel('LogSetting') private readonly logSetting: Model<LogSetting>,) {}

  /**
   * Inserir configuracao de drone
   * @author Tiago Ferreira Dídimo
   */
  async postLogSettingInsert(logSetting: LogSetting): Promise<any> {
    const insert =  new this.logSetting({
      id_setting_drone: logSetting.id_setting_drone,
      descreption_setting_drone: logSetting.descreption_setting_drone,
      create_setting_drone: logSetting.create_setting_drone,});
    return await insert.save();

  }

}
