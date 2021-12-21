
// hacemos un import de component, para transformar esta clase en
// un componente de angular
import { Component } from "@angular/core";

// en esta sección importante ver que usamos la backtilde ``
// usamos un decorador @Component
// selector: la etiqueta html que usaremos
// template: es código html entre backtildes ``
// templateUrl: '../app.component.html' si no va el template, se
//              usa este parámetro para indicar una ruta del html
@Component({
  selector: 'app-contador',
  template: `
      <!-- recuerde que esta variable viene del app.component.ts, de la clase -->
      <h1> {{ titulo }} </h1>
      <h3> La base es {{ base }} </h3>
      <!-- los paréntesis significan un evento -->
      <!-- <button (click)=" numero = numero + 1; ">+ 1</button> -->
      <!-- <button (click)=" sumar(); ">+ 1</button> -->
      <button (click)=" acumular(base); ">+ {{base}}</button>
      <span> {{ numero }} </span>
      <button (click)=" acumular(-base);">- {{base}}</button>
  `
})


// le pongo la palabra export porque la requiero usar en otros lugares
// fuera de esta clase, usando import
export class ContadorComponent {

  titulo:string = 'Contador App';
  numero: number = 10;
  base:   number = 5;

  acumular(valor:number){
    this.numero+=valor;
  }
}


// recordar que hay que referenciar este componente en app.module.ts
