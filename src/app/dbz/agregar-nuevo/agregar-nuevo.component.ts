import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-nuevo',
  templateUrl: './agregar-nuevo.component.html',
  styleUrls: ['./agregar-nuevo.component.css']
})
export class AgregarNuevoComponent  {

    nuevo : Personaje = {
    nombre : '',
    poder : 0
  }

  agregar( ):void{
    if(this.nuevo.nombre.length === 0){
             return;
    }

    this.personajes.push(this.nuevo);

    this.nuevo = {nombre:'', poder:0}
      }

}
