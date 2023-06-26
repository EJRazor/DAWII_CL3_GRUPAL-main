import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './soluciones/home/home.component';
import { MaterialModule } from './angular-material/material.module';
import { RouterModule } from '@angular/router';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { PromedioComponent } from './soluciones/promedio/promedio.component';
import { FormsModule } from '@angular/forms';
import { MarcaListaComponent } from './soluciones/marca/marca-lista/marca-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolucionesComponent,
    PromedioComponent,
    MarcaListaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'soluciones', component: SolucionesComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'promedio', component:PromedioComponent},
        {path: 'marca', component:MarcaListaComponent}
      ]

      
    }
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
