import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {CustomResponse} from '@interfaces/custom-response.interface';

const endpoints: any = {
  login: '/login',
  register: '/register'
}

@Injectable()

export class AccountApi {

  constructor(private http: Http) {}
  
  login(data?: any, params?: any): Observable<CustomResponse> {

    return this.http.post(endpoints.register, data, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      }
    );
  }

  register(data?: any, params?: any): Observable<CustomResponse> {

    return this.http.post(endpoints.register, data, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      }
    );
  }
}