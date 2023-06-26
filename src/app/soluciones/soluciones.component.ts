import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent {
constructor (private route: ActivatedRoute, 
  private router: Router){

}

irPaginaHome(): void{
  this.router.navigate(['home'], {relativeTo: this.route});
}
irPaginaPromedio(): void{
  this.router.navigate(['promedio'], {relativeTo: this.route});
}
irPaginaMarca(): void{
  this.router.navigate(['marca'], {relativeTo: this.route});
}
irPaginaLista02(): void{
  this.router.navigate(['lista02'], {relativeTo: this.route});
}

}
