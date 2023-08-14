import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingFormComponent } from './grading-form.component';

const routes: Routes = [
    {
        path: '',
        component: GradingFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GradingFormRoutingModule { }
