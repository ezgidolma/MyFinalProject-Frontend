import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../models/loginModel";
import { ResponseModel } from "../models/responseModel";
import { SingleResponseModel } from "../models/singleResponseModel";
import { TokenModel } from "../models/tokenModel";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    apiURL = 'https://localhost:7275/api/auth/';
    constructor(private httpclient:HttpClient) {}

    login(loginModel:LoginModel){
        return this.httpclient.post<SingleResponseModel<TokenModel>>(this.apiURL+"login",loginModel)
    }

    isAuthenticated(){
        if(localStorage.getItem("token")){
            return true;
        }
        else{
            return false;
        }
    }
}