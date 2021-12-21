import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})


export class HeroeComponent {

  nombre: string = 'Ironman';
  edad: number = 45;

  // es un get, no es un método
  public get nombreCapitalizado() : string {
    return this.nombre.toUpperCase();
  }


  obtenerNombre():string{

    return `${this.nombre} - ${this.edad}`;
    // return this.nombre + ' - ' + this.edad;
  }


  // cuando es llamado en el evento clic, se cambia
  // el nombre en todos los lugares y se actualiza
  // automáticamente en la página
  cambiarHeroe():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 33;
  }

}
