import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primerProyecto';

  numero1 : number = 0;
  numero2 : number = 0;
  suma : number = 0;
  promedio : number = 0;

  calcular(){

    this.suma = this.numero1 + this.numero2;
    this.promedio = this.suma / 2;

    console.log(this.suma);
    console.log(this.promedio);
  }

  limpiar(){

    this.numero1 = 0;
    this.numero2 = 0;
    
  }
}
