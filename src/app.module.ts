
import { Module } from '@nestjs/common';
import { ConnectionModule } from './databse/Connection.module';
import { DataServiceModule } from './services/data-services/data.services.module';
import { UserServiceModule } from './services/use-cases/users/user.services.module';

import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    ConnectionModule, 
    DataServiceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
