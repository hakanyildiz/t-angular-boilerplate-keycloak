import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from '@shared/components/toast/toast-config';
import { environment } from '@env';
import { MaterialModule } from '@shared/material.module';

export const ENVIRONMENT = new InjectionToken<string>('Environment');

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ToastComponent
  ]
})
export class SharedModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: environment
        },
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config }
        }
      ]
    };
  }
}
