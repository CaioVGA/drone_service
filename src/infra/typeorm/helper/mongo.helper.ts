import { MongooseModule } from '@nestjs/mongoose';
import { LogSettingSchema } from '../../../domain/schema/log-setting.schema';

export const NoMySQLConfigure = MongooseModule.forRoot(
  'mongodb+srv://airgo:airgo@airgo.hujkz.mongodb.net/airgo_mongodb?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

export const NoMySQLForFeature = MongooseModule.forFeature([{ name: 'LogSetting', schema: LogSettingSchema }]);
