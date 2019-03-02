import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        //const copiedReq = req.clone({headers: req.headers.append('auth', token)});
        const token = this.authService.getToken();
        const copiedReq = req.clone({params: req.params.set('auth', token)});
        return next.handle(copiedReq);
    }
}