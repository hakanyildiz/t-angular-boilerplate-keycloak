import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
