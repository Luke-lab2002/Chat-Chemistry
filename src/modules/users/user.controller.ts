import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController{
    constructor(private readonly userService:UserService ){

    }

    @Get()
    HandleGetListUser(){
        return this.userService.getListUserDB();
    }

    @Post()
    HandleCreateUser(){
        return this.userService.createUserDB();
    }

    @Get()
    HandleGetUser(){
        return this.userService.getUserDB();
    }

}