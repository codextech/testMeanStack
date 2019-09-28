import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class AuthService {

  usertoken: any;
decodedtoken: any = '';
jwtHelper: JwtHelperService = new JwtHelperService();


constructor(private http: HttpClient) { }

userLogIn(model) {
  return this.http.post<any>(environment.apiUrl + 'api/auth/login', model).pipe(
    map(result => {
      if (result) {
        localStorage.setItem('access_token', result.token);
        this.decodedtoken = this.jwtHelper.decodeToken(result.token);
        this.usertoken = result.token;
      }
    })
  );
  }

}
