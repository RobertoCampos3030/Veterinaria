import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


const routes: Routes=[
  {
      path:'clientes',
      component:ClientesComponent,
      
  },
  {
      path:'mascotas',
      component:MascotasComponent

  },
  {
      path:'reserva',
      component:ReservasComponent
  },
  {
      path:'servicios',
      component:ServiciosComponent
  },
  {
      path:'**',
      redirectTo :'' 
  }


]

@NgModule({
  imports:[
      RouterModule.forRoot( routes )
  ],
  exports:[
      RouterModule
  ]
})

export class AppRoutingModule{}