import { Module } from "@nestjs/common";
import { UserServiceModule } from "../use-cases/users/user.services.module";
import { UsersServices } from "../use-cases/users/users.services.service";

@Module({
    imports: [],
    controllers: [],
    providers: [UsersServices],
    exports: []
})

export class DataServiceModule{}