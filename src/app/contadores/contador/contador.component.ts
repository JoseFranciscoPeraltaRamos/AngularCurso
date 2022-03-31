import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`

        <!-- Tarea -->  
        <H1>{{ title }}</H1>
        <H3>La base es: <strong> {{ base }} </strong></H3>
        <button (click)="acumular(base)"> + {{ base }} </button>
        <span> {{ numeroTarea }} </span>
        <button (click)="acumular(-base)"> - {{ base }} </button>
    `
})
export class ContadorComponent{
    title: string = 'Contador App';
    numero: number = 10;
    numeroTarea: number = 55;
    base:number = 5;
/*Contador con una funcion */
    acumular(valor:number ){
        this.numeroTarea += valor;
  }

}