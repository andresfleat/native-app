// import {Injectable, OnDestroy} from '@angular/core';
// import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// import {Subscription} from 'rxjs/Subscription';

// import {environment} from '../../../environments/environment';

// import {HttpConfig} from '@config/http.config';

// import {Cookies} from '@services/cookies.service';
// import {StorageLogger} from '@services/storage-logger.service';

// const tokenIdKey: string = 'firebase-admin:host:lyzted.tokenId';

// let host: string;

// if (environment.production) {
//   host = HttpConfig.host.prod;
// }
// else {
//   host = HttpConfig.host.dev;
// }

// @Injectable()

// /* Wrapper for Angular's Http class, let's us provide headers and other things on every request */
// export class HttpClient implements OnDestroy {

//   constructor(
//     private http: Http,
//     private storageLogger: StorageLogger
//   ) {

//     this.getToken();

//     this.storageSubscription = this.storageLogger.logger$.subscribe(
//       (action: any) => {

//         if (action && action.key === tokenIdKey) {
//           this.getToken();
//         }
//       }
//     );
//   }

//   private storageSubscription: Subscription;
//   private token: string;

//   ngOnDestroy() {
//     this.storageSubscription.unsubscribe();
//   }

//   getToken(): void {

//     try {
//       this.token = localStorage.getItem(tokenIdKey);
//     }
//     catch(error) {
//       this.token = Cookies.getItem(tokenIdKey);
//     }
//   }

//   convertJSONtoParams(json: any): URLSearchParams {

//     let params: URLSearchParams = new URLSearchParams();

//     for (let key in json) {

//       if (json.hasOwnProperty(key) && json[key]) {

//         if (json[key].constructor === Array && !json[key].length) {
//           continue;
//         }
//         else {
//           params.set(key, json[key]);
//         }
//       }
//     }

//     return params;
//   }

//   getRequestOptions(params?: any): RequestOptions {

//     let headers = new Headers();

//     // headers.append('Content-Type', 'application/x-www-form-urlencoded');
//     headers.append('Content-Type', 'application/json');

//     this.createAuthorizationHeader(headers);

//     return new RequestOptions({
//       headers: headers,
//       search: params ? this.convertJSONtoParams(params) : null
//     });
//   }

//   createAuthorizationHeader(headers: Headers): void {
//     headers.append('Authorization', this.token);
//   }

//   checkResponseStatus(err: any) {

//     if (err.status === 401) {

//       // If we want we can redirect to login here or something else
//     }

//     return Observable.of(err);
//   }

//   get(url: string, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.get(host + url, options).catch((err: Response) => this.checkResponseStatus(err));
//   }

//   post(url: string, data: any, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.post(host + url, data, options).catch((err: Response) => this.checkResponseStatus(err));
//   }

//   put(url: string, data: any, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.put(host + url, data, options).catch((err: Response) => this.checkResponseStatus(err));
//   }

//   delete(url: string, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.delete(host + url, options).catch((err: Response) => this.checkResponseStatus(err));
//   }

//   patch(url: string, data: any, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.patch(host + url, data, options).catch((err: Response) => this.checkResponseStatus(err));
//   }

//   head(url: string, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.head(host + url, options).catch((err) => this.checkResponseStatus(err));
//   }

//   options(url: string, params?: any): Observable<Response> {

//     let options: RequestOptions = this.getRequestOptions(params);

//     return this.http.options(host + url, options).catch((err: Response) => this.checkResponseStatus(err));
//   }
// }
