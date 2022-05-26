
import { Module } from '@nestjs/common';
import { ConnectionModule } from './databse/Connection.module';
import { DataServiceModule } from './services/data-services/data.services.module';
import { UserServiceModule } from './services/use-cases/users/user.services.module';


@Module({
  imports: [ConnectionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
