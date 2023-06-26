import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.scss']
})
export class CategoriaListaComponent implements OnInit {
  categorias: Categoria[] = [];
  displayedColumns: string[] = ['cod_cat','nom_cat'];

  constructor(
    private categoriaService: CategoriaService
  ){

  }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
    .subscribe((data)=>{
      this.categorias=data
    });
  }
}
