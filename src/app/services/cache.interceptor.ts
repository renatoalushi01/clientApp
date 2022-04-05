import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType, HttpResponse, HttpContextToken } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';

export const CACHEABLE =  new HttpContextToken(() => true);
@Injectable()

export class CacheInterceptor implements HttpInterceptor{

    constructor(private cacheService: HttpCacheService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //cache only allowed method
        if(!req.context.get(CACHEABLE)){
            return next.handle(req);
        }

        //parse non cachable req
        if(req.method !== 'GET'){
            console.log(`invalidating Cache ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        //attemp to retrive a cache response
        const cachedResponse = this.cacheService.get(req.url);
        
        if(cachedResponse){
            console.log('Cached response');
            return of(cachedResponse);
        }

        return next.handle(req)
            .pipe(
                tap(event => {
                    if(event.type === HttpEventType.Response){
                        console.log('Adding ittem to cache');
                        this.cacheService.put(req.url, event);
                    }
                })
            )

    }
}