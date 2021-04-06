import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDetailComponent } from '@modules/dashboard/pages/custom-detail/custom-detail.component';
import { DashboardComponent } from '@modules/dashboard/pages/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'custom-detail/:id',
        component: CustomDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
