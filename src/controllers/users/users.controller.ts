import { Controller, Delete, Get, Param, Patch, Post, Body, HttpStatus, HttpCode } from "@nestjs/common";
import { identity } from "rxjs";
import { CreateUserDto } from "src/dtos/create-user.dto";
import { UpdateUserDto } from "src/dtos/update-user.dto";
import { UsersServices } from "src/services/use-cases/users/users.services.service";

@Controller('/')
export class UsersController{

    constructor(private usersServices: UsersServices){}

    @Get('/all')
    async getfindAll(){
        return await this.usersServices.getfindAll()
    }

    @Get('user/:id')
    async getFindOneById(@Param() params){
        return await this.usersServices.getFindOneById(params.id)

    }

    @Post('createuser')
    async postCreateUser(@Body() createUserDto: CreateUserDto){
        return await this.usersServices.postCreateUser(createUserDto)
    }

    @Patch('edituser/:id')
    async patchUpdateUser(@Param() params, @Body() updateUserDto: UpdateUserDto){        
        return await this.usersServices.patchUpdateUser(params, updateUserDto)
    }

    @Delete('deleteuser/:id')
    async deleteUser(@Param() params){
        return await this.usersServices.deleteUser(params)

    }

}