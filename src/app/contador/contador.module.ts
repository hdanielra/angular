import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  declarations:[
    ContadorComponent
  ],
  // los exports van los componentes que quiero dejar visibles
  // por fuera de este módulo
  exports:[
    ContadorComponent
  ],
  imports:[
    CommonModule
  ]
})

export class ContadorModule {
  constructor() {}
}
