import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {appReducers, metaReducers} from "./common/store/core/states/app.state";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {CounterSignalStoreEffect} from "./common/store/signal/effects/CounterSignalStore.effect";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

export class CustomTranslateLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}
  
    getTranslation(lang: string): Observable<any> {
      return this.http.get(`/assets/i18n/${lang}.json`);
    }
  }

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideStore(
            appReducers,
            {
                metaReducers,
                runtimeChecks: {
                    strictActionImmutability: false,
                    strictStateImmutability: false
                }
            }
        ),
            importProvidersFrom(
              TranslateModule.forRoot({
                loader: {
                  provide: TranslateLoader,
                  useFactory: HttpLoaderFactory,
                  deps: [HttpClient]
                }
              })
            ),
        provideStoreDevtools({
            maxAge: 10,
            logOnly: !isDevMode(),
            connectInZone: true
        }),
        provideEffects([CounterSignalStoreEffect]),
        provideHttpClient(),
        importProvidersFrom(
          BackButtonDisableModule.forRoot({
            preserveScroll: true
            })
        )
    ]
};
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}



// const translateService = new TranslateService(new CustomTranslateLoader(new HttpClient()));
// translateService.setDefaultLang('en');