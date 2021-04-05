import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminComponentComponent } from './pages/admin-component/admin-component.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
