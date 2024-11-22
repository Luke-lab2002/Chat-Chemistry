import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

    getListUserDB(){
        return "List User";
    }

    createUserDB(){
        return "Create User";
    }

    getUserDB(){
        return "User"
    }
}