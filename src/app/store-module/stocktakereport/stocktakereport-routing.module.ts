import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocktakereportPage } from './stocktakereport.page';

const routes: Routes = [
  {
    path: '',
    component: StocktakereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocktakereportPageRoutingModule {}
