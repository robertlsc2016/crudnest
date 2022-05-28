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
    
        const id = await this.usersModel.findOne(
            {id: createUserDto.id},
            {raw: true}
        )

        if(id == null){
            return await this.usersModel.create(createUserDto)
        } else{
            return '{já existe usuário com esse id}'
        }
        
        console.log(id)
        
        // console.log(id)
        // console.log(id.map((a) => {console.log(a.id)}))

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

    async deleteUser(params)
    {
        return await this.usersModel.findOneAndRemove(
            {id: params.id}
        ).exec()
    }
    
}