import { Injectable } from "@nestjs/common"; 

@Injectable({})
export class AuthenticationService {
    signup(){
        return 'Sign up successfully!' 
    }
    signin(){
        return 'Sign in successfully!'
    } 
}