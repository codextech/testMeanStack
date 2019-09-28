import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  postId: any;
  constructor(private http: HttpClient) { }

  save(model, target) {
    return this.http.post<any>(`${environment.apiUrl}api/${target}`, model);
  }

  delete(id, target) {
    return this.http.delete<any>(`${environment.apiUrl}api/${target}`, {
      params: {_id: id}
    });
  }

  edit(model, target) {
    return this.http.put<any>(`${environment.apiUrl}api/${target}`, model);
  }

  get(target) {
   return  this.http.get<any>(`${environment.apiUrl}api/${target}`);
  }

}
