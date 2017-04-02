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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC13cmFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLXdyYXBwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsMEZBQTBGO0FBQzFGLDhDQUE4QztBQUM5QyxrREFBa0Q7QUFFbEQsaUVBQWlFO0FBRWpFLGtEQUFrRDtBQUVsRCxxREFBcUQ7QUFDckQsa0VBQWtFO0FBRWxFLG1FQUFtRTtBQUVuRSxvQkFBb0I7QUFFcEIsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osU0FBUztBQUNULGdDQUFnQztBQUNoQyxJQUFJO0FBRUosZ0JBQWdCO0FBRWhCLHFHQUFxRztBQUNyRyxpREFBaUQ7QUFFakQsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQiwyQ0FBMkM7QUFDM0MsUUFBUTtBQUVSLHVCQUF1QjtBQUV2Qix1RUFBdUU7QUFDdkUsMkJBQTJCO0FBRTNCLHFEQUFxRDtBQUNyRCw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLFVBQVU7QUFDVixTQUFTO0FBQ1QsTUFBTTtBQUVOLCtDQUErQztBQUMvQywyQkFBMkI7QUFFM0Isb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxNQUFNO0FBRU4sdUJBQXVCO0FBRXZCLFlBQVk7QUFDWix1REFBdUQ7QUFDdkQsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQixrREFBa0Q7QUFDbEQsUUFBUTtBQUNSLE1BQU07QUFFTixzREFBc0Q7QUFFdEQsMkRBQTJEO0FBRTNELDhCQUE4QjtBQUU5QixxREFBcUQ7QUFFckQsc0VBQXNFO0FBQ3RFLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFFUixxQkFBcUI7QUFDckIsTUFBTTtBQUVOLHNEQUFzRDtBQUV0RCxtQ0FBbUM7QUFFbkMsOEVBQThFO0FBQzlFLDBEQUEwRDtBQUUxRCwrQ0FBK0M7QUFFL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsVUFBVTtBQUNWLE1BQU07QUFFTix3REFBd0Q7QUFDeEQsbURBQW1EO0FBQ25ELE1BQU07QUFFTixvQ0FBb0M7QUFFcEMsZ0NBQWdDO0FBRWhDLHNFQUFzRTtBQUN0RSxRQUFRO0FBRVIsaUNBQWlDO0FBQ2pDLE1BQU07QUFFTiwyREFBMkQ7QUFFM0Qsb0VBQW9FO0FBRXBFLHlHQUF5RztBQUN6RyxNQUFNO0FBRU4sdUVBQXVFO0FBRXZFLG9FQUFvRTtBQUVwRSxnSEFBZ0g7QUFDaEgsTUFBTTtBQUVOLHNFQUFzRTtBQUV0RSxvRUFBb0U7QUFFcEUsK0dBQStHO0FBQy9HLE1BQU07QUFFTiw4REFBOEQ7QUFFOUQsb0VBQW9FO0FBRXBFLDRHQUE0RztBQUM1RyxNQUFNO0FBRU4sd0VBQXdFO0FBRXhFLG9FQUFvRTtBQUVwRSxpSEFBaUg7QUFDakgsTUFBTTtBQUVOLDREQUE0RDtBQUU1RCxvRUFBb0U7QUFFcEUsZ0dBQWdHO0FBQ2hHLE1BQU07QUFFTiwrREFBK0Q7QUFFL0Qsb0VBQW9FO0FBRXBFLDZHQUE2RztBQUM3RyxNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7SW5qZWN0YWJsZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuLy8gaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuLy8gaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuLy8gaW1wb3J0IHtIdHRwQ29uZmlnfSBmcm9tICdAY29uZmlnL2h0dHAuY29uZmlnJztcblxuLy8gaW1wb3J0IHtDb29raWVzfSBmcm9tICdAc2VydmljZXMvY29va2llcy5zZXJ2aWNlJztcbi8vIGltcG9ydCB7U3RvcmFnZUxvZ2dlcn0gZnJvbSAnQHNlcnZpY2VzL3N0b3JhZ2UtbG9nZ2VyLnNlcnZpY2UnO1xuXG4vLyBjb25zdCB0b2tlbklkS2V5OiBzdHJpbmcgPSAnZmlyZWJhc2UtYWRtaW46aG9zdDpseXp0ZWQudG9rZW5JZCc7XG5cbi8vIGxldCBob3N0OiBzdHJpbmc7XG5cbi8vIGlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4vLyAgIGhvc3QgPSBIdHRwQ29uZmlnLmhvc3QucHJvZDtcbi8vIH1cbi8vIGVsc2Uge1xuLy8gICBob3N0ID0gSHR0cENvbmZpZy5ob3N0LmRldjtcbi8vIH1cblxuLy8gQEluamVjdGFibGUoKVxuXG4vLyAvKiBXcmFwcGVyIGZvciBBbmd1bGFyJ3MgSHR0cCBjbGFzcywgbGV0J3MgdXMgcHJvdmlkZSBoZWFkZXJzIGFuZCBvdGhlciB0aGluZ3Mgb24gZXZlcnkgcmVxdWVzdCAqL1xuLy8gZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4vLyAgIGNvbnN0cnVjdG9yKFxuLy8gICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbi8vICAgICBwcml2YXRlIHN0b3JhZ2VMb2dnZXI6IFN0b3JhZ2VMb2dnZXJcbi8vICAgKSB7XG5cbi8vICAgICB0aGlzLmdldFRva2VuKCk7XG5cbi8vICAgICB0aGlzLnN0b3JhZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JhZ2VMb2dnZXIubG9nZ2VyJC5zdWJzY3JpYmUoXG4vLyAgICAgICAoYWN0aW9uOiBhbnkpID0+IHtcblxuLy8gICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5rZXkgPT09IHRva2VuSWRLZXkpIHtcbi8vICAgICAgICAgICB0aGlzLmdldFRva2VuKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICApO1xuLy8gICB9XG5cbi8vICAgcHJpdmF0ZSBzdG9yYWdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4vLyAgIHByaXZhdGUgdG9rZW46IHN0cmluZztcblxuLy8gICBuZ09uRGVzdHJveSgpIHtcbi8vICAgICB0aGlzLnN0b3JhZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbi8vICAgfVxuXG4vLyAgIGdldFRva2VuKCk6IHZvaWQge1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2tlbklkS2V5KTtcbi8vICAgICB9XG4vLyAgICAgY2F0Y2goZXJyb3IpIHtcbi8vICAgICAgIHRoaXMudG9rZW4gPSBDb29raWVzLmdldEl0ZW0odG9rZW5JZEtleSk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgY29udmVydEpTT050b1BhcmFtcyhqc29uOiBhbnkpOiBVUkxTZWFyY2hQYXJhbXMge1xuXG4vLyAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4vLyAgICAgZm9yIChsZXQga2V5IGluIGpzb24pIHtcblxuLy8gICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoa2V5KSAmJiBqc29uW2tleV0pIHtcblxuLy8gICAgICAgICBpZiAoanNvbltrZXldLmNvbnN0cnVjdG9yID09PSBBcnJheSAmJiAhanNvbltrZXldLmxlbmd0aCkge1xuLy8gICAgICAgICAgIGNvbnRpbnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgIHBhcmFtcy5zZXQoa2V5LCBqc29uW2tleV0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHBhcmFtcztcbi8vICAgfVxuXG4vLyAgIGdldFJlcXVlc3RPcHRpb25zKHBhcmFtcz86IGFueSk6IFJlcXVlc3RPcHRpb25zIHtcblxuLy8gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuLy8gICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4vLyAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbi8vICAgICB0aGlzLmNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoaGVhZGVycyk7XG5cbi8vICAgICByZXR1cm4gbmV3IFJlcXVlc3RPcHRpb25zKHtcbi8vICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4vLyAgICAgICBzZWFyY2g6IHBhcmFtcyA/IHRoaXMuY29udmVydEpTT050b1BhcmFtcyhwYXJhbXMpIDogbnVsbFxuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vICAgY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcihoZWFkZXJzOiBIZWFkZXJzKTogdm9pZCB7XG4vLyAgICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLnRva2VuKTtcbi8vICAgfVxuXG4vLyAgIGNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyOiBhbnkpIHtcblxuLy8gICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcblxuLy8gICAgICAgLy8gSWYgd2Ugd2FudCB3ZSBjYW4gcmVkaXJlY3QgdG8gbG9naW4gaGVyZSBvciBzb21ldGhpbmcgZWxzZVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGVycik7XG4vLyAgIH1cblxuLy8gICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuLy8gICAgIGxldCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IHRoaXMuZ2V0UmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblxuLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGhvc3QgKyB1cmwsIG9wdGlvbnMpLmNhdGNoKChlcnI6IFJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyKSk7XG4vLyAgIH1cblxuLy8gICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuLy8gICAgIGxldCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IHRoaXMuZ2V0UmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblxuLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChob3N0ICsgdXJsLCBkYXRhLCBvcHRpb25zKS5jYXRjaCgoZXJyOiBSZXNwb25zZSkgPT4gdGhpcy5jaGVja1Jlc3BvbnNlU3RhdHVzKGVycikpO1xuLy8gICB9XG5cbi8vICAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuLy8gICAgIGxldCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IHRoaXMuZ2V0UmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblxuLy8gICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGhvc3QgKyB1cmwsIGRhdGEsIG9wdGlvbnMpLmNhdGNoKChlcnI6IFJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyKSk7XG4vLyAgIH1cblxuLy8gICBkZWxldGUodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuLy8gICAgIGxldCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IHRoaXMuZ2V0UmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblxuLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGhvc3QgKyB1cmwsIG9wdGlvbnMpLmNhdGNoKChlcnI6IFJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyKSk7XG4vLyAgIH1cblxuLy8gICBwYXRjaCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cbi8vICAgICBsZXQgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMgPSB0aGlzLmdldFJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cbi8vICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGhvc3QgKyB1cmwsIGRhdGEsIG9wdGlvbnMpLmNhdGNoKChlcnI6IFJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyKSk7XG4vLyAgIH1cblxuLy8gICBoZWFkKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cbi8vICAgICBsZXQgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMgPSB0aGlzLmdldFJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cbi8vICAgICByZXR1cm4gdGhpcy5odHRwLmhlYWQoaG9zdCArIHVybCwgb3B0aW9ucykuY2F0Y2goKGVycikgPT4gdGhpcy5jaGVja1Jlc3BvbnNlU3RhdHVzKGVycikpO1xuLy8gICB9XG5cbi8vICAgb3B0aW9ucyh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4vLyAgICAgbGV0IG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zID0gdGhpcy5nZXRSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXG4vLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5vcHRpb25zKGhvc3QgKyB1cmwsIG9wdGlvbnMpLmNhdGNoKChlcnI6IFJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2VTdGF0dXMoZXJyKSk7XG4vLyAgIH1cbi8vIH1cbiJdfQ==