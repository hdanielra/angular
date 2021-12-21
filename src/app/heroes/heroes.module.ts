import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


// luego este módulo lo importo en app.module, y ya con eso se ahorra
// carga cada uno de los componentes, queda modularizado

@NgModule({
  // en las declaraciones van los componentes que hacen parte
  // de este módulo, en este caso heroes y listado de heroes
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // los exports son para las cosas que quiero hacer públicas y que
  // se puedan usar como etiquetas html (visibles fuera de este módulo)
  exports:[
    ListadoComponent
  ],
  // en los imports van solo módulos (los que van ya en app.module no
  // es necesario cargarlos nuevamente)
  imports:[
    CommonModule // es necesario para usar el ngFor, ngIf, entre otros
  ]

})

export class HeroesModule {
  constructor() {
  }
}
