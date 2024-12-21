import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    private apiTokenURL = "https://demo.dotcms.com/api/v1/authentication/api-token"

    private token: any;

    private user = "admin@dotcms.com";
    private pass = "admin";

    async getAPIToken(){ 
        if(this.token){
            return this.token;
        }else{
            const headers = new HttpHeaders({ 'Content-Type': 'application/json'}); 
            const body = {
                "user": this.user,
                "password": this.pass,
                "expirationDays":10
            }
            
            try{
                const result = await firstValueFrom(this.http.post<any>(this.apiTokenURL, body, { headers }));
                this.token = result.entity.token;
                console.log("got a new token");
                return this.token;
            } catch (error){
                console.error("error getting API Token");
            }
        }
        return null;
    }

}