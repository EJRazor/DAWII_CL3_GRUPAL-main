import { Injectable } from '@angular/core';
import { Marca } from './marca';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor( 
    private http: HttpClient) {}

   listarMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>("https://apimocha.com/bdnandito2/marca");
  }

}
