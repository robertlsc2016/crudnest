import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document

@Schema()
export class Users{

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    senha: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users)