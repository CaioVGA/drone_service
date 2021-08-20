import * as mongoose from 'mongoose';


export const LogSettingSchema = new mongoose.Schema({
  id_setting_drone: { type: Number, required: true },
  descreption_setting_drone: { type: String, required: true },
  create_setting_drone: { type: Date, required: true },
});

export interface LogSetting extends mongoose.Document {
  id: string;
  id_setting_drone: number;
  descreption_setting_drone: string;
  create_setting_drone: Date;
}

