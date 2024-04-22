import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {provideHttpClient} from "@angular/common/http";
import {appReducers, metaReducers} from "./common/store/core/states/app.state";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {CounterSignalStoreEffect} from "./common/store/signal/effects/CounterSignalStore.effect";

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
        provideStoreDevtools({
            maxAge: 10,
            logOnly: !isDevMode(),
            connectInZone: true
        }),
        provideEffects([CounterSignalStoreEffect]),
        provideHttpClient(),
    ]
};
