import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  listarCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("https://apimocha.com/bdnandito2/categoria");
  }
}
