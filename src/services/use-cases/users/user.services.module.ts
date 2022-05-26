import { Catch, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersController } from "src/controllers/users/users.controller";
import { Users, UsersSchema } from "src/databse/schemas/users.schema";
import { UsersServices } from "./users.services.service";



@Module({
    imports: [MongooseModule.forFeature([{
        name: Users.name,
        schema: UsersSchema
    }])],
    providers: [UsersServices],
    controllers: [UsersController]
})

export class UserServiceModule{}