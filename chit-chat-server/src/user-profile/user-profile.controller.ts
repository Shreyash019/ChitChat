import { Controller, Get, Put, Param } from "@nestjs/common";
import { UserProfileService } from "./user-profile-service";

@Controller("profile")
export class UserProfileController{
    constructor(private userProfileService: UserProfileService){}

    @Get('/all')
    allUsersAvailable(){
        return this.userProfileService.allUsersAvailable();
    }

    @Put('/:userId')
    userProfileInformation(@Param('userId') userId: string,){
        return this.userProfileService.userProfileInformation(userId);
    }
}