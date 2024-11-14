import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

// import { routes } from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {routes} from '../routes/app.routes';
import {storeModule} from './core/store/store.module';
import {effectsModule} from './core/store/effects.module';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {RequestInterceptorFn} from './core/interceptor/request.interceptor';
import {ResponseInterceptorFn} from './core/interceptor/response.interceptor';
import {en_US, provideNzI18n} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStoreDevtools} from '@ngrx/store-devtools';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([RequestInterceptorFn, ResponseInterceptorFn])),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(storeModule),
    provideEffects(effectsModule),
    HttpClientModule,
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ],
};
