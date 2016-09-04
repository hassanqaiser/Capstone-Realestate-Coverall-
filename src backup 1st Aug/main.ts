import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';



import { AppModule, environment } from './app/';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
