import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl : 'heroe.component.html',
  styleUrls : ['heroe.component.css']
})
export class HeroeComponent{

  private nombre : string = 'Ironman';
  private edad : number = 23;

  get nombreMayuscula(): string {
    return this.nombre.toUpperCase();
  }

obtenerNombre():string{
  return `${this.nombreMayuscula} - ${this.edad}`;
}

cambiarNombre():void{
  this.nombre = 'SpiderMan'
}

cambiarEdad():void{
  this.edad = 35
}

}
