import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes : string[] = ["SpiderMan", "Superman", "Aquaman", "Flash", "Wonder Woman"]


  borrarHeroe():void{
    this.heroes.splice(0,1)
  }
}
