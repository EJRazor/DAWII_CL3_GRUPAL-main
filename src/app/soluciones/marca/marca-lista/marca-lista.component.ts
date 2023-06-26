import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca';

@Component({
  selector: 'app-marca-lista',
  templateUrl: './marca-lista.component.html',
  styleUrls: ['./marca-lista.component.scss']
})
export class MarcaListaComponent implements OnInit{
  marcas: Marca[] = [];
  displayedColumns: string[] = ['cod_mrc','nom_mrc'];

  constructor(
    private marcaService: MarcaService
  ){

  }
  ngOnInit(): void {
    this.marcaService.listarMarcas()
    .subscribe((data)=>{
      this.marcas = data
    });
  }

}
