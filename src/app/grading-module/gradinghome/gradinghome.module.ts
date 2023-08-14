import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GradinghomePageRoutingModule } from "./gradinghome-routing.module";
import { GradinghomePage } from "./gradinghome.page";
import { OvalShapeModule } from "src/app/component/ux/oval-shape/oval-shape.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradinghomePageRoutingModule,
    ReactiveFormsModule,
    OvalShapeModule,
    TranslateModule    
  ],
  declarations: [GradinghomePage],
})
export class GradinghomePageModule {}
