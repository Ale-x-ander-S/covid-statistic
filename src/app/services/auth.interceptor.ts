import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cloned = req.clone({
      headers: req.headers.append('X-RapidAPI-Key', '359bec14a2msh68b54c296b0470ep12d081jsn70f13e18d9b7')
    })
    return next.handle(cloned)
  }
}
