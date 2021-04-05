import { ApplicationRef, APP_INITIALIZER, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';

import { environment } from '@env';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,

    // keycloak
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  // comment boostrap property when keycloak conf completed & ready to use
  bootstrap: [AppComponent]
})
export class AppModule {};

/**
 * Uncomment AppModule at below when keycloak conf completed & ready to use
 */
/*
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    const { keycloakOptions } = environment;

    keycloakService
      .init(keycloakOptions)
      .then(() => {
        console.log('[ngBoostrap] boostrap app');
        appRef.bootstrap(AppComponent);
      })
      .catch(error => {
        console.error('[ngBoostrap] init Keycloak Failed', error);
      })

  }
}
*/
