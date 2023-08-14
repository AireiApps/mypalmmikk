import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreOrderRequestComponent } from './store-order-request.component';


const routes: Routes = [
    {
        path: '',
        component: StoreOrderRequestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreOrderRequestPageRoutingModule { }
