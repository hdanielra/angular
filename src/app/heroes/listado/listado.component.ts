import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


// export class ListadoComponent implements OnInit {
export class ListadoComponent {

  // // primero se ejecuta el constructor
  // constructor() {
  //   console.log('Constructor...')
  //  }

  // // luego se ejecuta el ngOnInit
  // ngOnInit(): void {
  //   console.log('ngOnInit...');

  // }
  heroeBorrado:string = '';
  heroes:string[] = ['spiderman','ironman','hulk','superman'];


  borrarHeroe(){
    console.log('Borrando...');

    // borrar todos
    // this.heroes = [];

    // borra el último de la lista
    // this.heroes.pop();

    // borra el primero de la lista
    // this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);






  }
}
