import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto{

    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()   
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly senha: string;

}