import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:3751956842@sandbox.c4bvy.mongodb.net/CrudNestJS?retryWrites=true&w=majority')
        // MongooseModule.forRoot('mongodb://localhost:27017/CrudNestJS')
    ]
})

export class ConnectionModule{}