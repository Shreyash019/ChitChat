import { Controller, Get, Post } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";

@Controller("auth")
export class AuthenticationController{
    constructor(private authenticationService: AuthenticationService){}

    @Post('sign-up')
    signup(){
        return this.authenticationService.signup();
    }

    @Get('sign-in')
    signin(){
        return this.authenticationService.signin();
    }

}