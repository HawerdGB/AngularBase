import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: '../contador/contador.component.html',
  styleUrls: ['../contador/contador.component.css']
})


  export class ContadorComponent {
    titulo : string = 'Contador App';
    numero : number = 0;
    base : number = 3;

    acumulador( valor:number ){
      this.numero += valor;
 }
};


