import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';
import { CustomDetailComponent } from './pages/custom-detail/custom-detail.component';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponentComponent,
    CustomDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
