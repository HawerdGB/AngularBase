import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  providers:[],
  bootstrap:[ContadorComponent]
})
export class ContadorModule{}

