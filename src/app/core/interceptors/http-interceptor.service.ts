import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept(request: HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>>{
    return next.handle(request)
    .pipe(
      tap({
         error:(err:any) => {
            if(err instanceof HttpErrorResponse) {
              const appErrorHandler = this.injector.get(ErrorHandler);
              appErrorHandler.handleError(err);
            }
         }          
      })
    );
  }
}


