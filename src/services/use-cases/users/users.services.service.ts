import { CreateUserDto } from './../../../dtos/create-user.dto';
import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Users, UsersDocument } from "src/databse/schemas/users.schema";
import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Injectable()
export class UsersServices{

    constructor(
        @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
    ){}


    async getfindAll(): Promise<Users[]> {
        return await this.usersModel.find().exec()
    }

    async getFindOneById(id: string): Promise<Users>{
        return await this.usersModel.findOne({id: id}).exec()
    }

    async postCreateUser(createUserDto: CreateUserDto){
        return await this.usersModel.create(createUserDto)
    }

    async patchUpdateUser(params, updateUserDto: UpdateUserDto){

        return await this.usersModel.findOneAndUpdate(
            {id: params.id}, 
            {
                id: updateUserDto.id,
                name: updateUserDto.name,
                email: updateUserDto.email,
                senha: updateUserDto.senha
            },
            {new: true}
        ).exec()

    }
    
}