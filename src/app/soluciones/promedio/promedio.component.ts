import { Component } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.scss']
})
export class PromedioComponent {
  frmProm = {
    nota01: null,
    nota02: null,
    nota03: null,
    promedio: 0
  }

  resultado = ""

  lstPacientes: Paciente = []

  calcularPromedio(){
    this.frmProm.promedio = (Number(this.frmProm.nota01)+ 
                            Number(this.frmProm.nota02)+
                            Number(this.frmProm.nota03))/3
                            
    this.resultado = "Su PROMEDIO es "+ this.frmProm.promedio
  }
}
type Paciente = Array<{nombre: string, imc: number }>;