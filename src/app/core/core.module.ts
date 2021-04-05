import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
