import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreOrderHomeComponent } from './store-order-home.component';


const routes: Routes = [
    {
        path: '',
        component: StoreOrderHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreOrderHomePageRoutingModule { }
