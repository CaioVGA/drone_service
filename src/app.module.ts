import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySQLConfigure } from './infra/typeorm/helper/mysql.helper';
import { SettingsModule } from './module/settings.module';
import { DroneModule } from './module/drone.module';
import { NoMySQLConfigure } from './infra/typeorm/helper/mongo.helper';

@Module({
  imports: [SettingsModule, DroneModule, MySQLConfigure, NoMySQLConfigure],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
