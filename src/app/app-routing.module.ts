import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  

  {
    path: 'index-us',
    loadChildren: () => import('./pages/index-us/index-us.module').then( m => m.IndexUsPageModule)
  },
  {
    path: 'viajes-us',
    loadChildren: () => import('./pages/viajes-us/viajes-us.module').then( m => m.ViajesUsPageModule)
  },

  {
    path: 'desc-viaje-us',
    loadChildren: () => import('./pages/desc-viaje-us/desc-viaje-us.module').then( m => m.DescViajeUsPageModule)
  },
  {
    path: 'seguridad-us',
    loadChildren: () => import('./pages/seguridad-us/seguridad-us.module').then( m => m.SeguridadUsPageModule)
  },
  {
    path: 'perfil-us',
    loadChildren: () => import('./pages/perfil-us/perfil-us.module').then( m => m.PerfilUsPageModule)
  },
  {
    path: 'info-uc',
    loadChildren: () => import('./pages/info-uc/info-uc.module').then( m => m.InfoUcPageModule)
  },
  
  {
    path: 'desc-viajes-2-us',
    loadChildren: () => import('./pages/desc-viajes-2-us/desc-viajes-2-us.module').then( m => m.DescViajes2UsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'solicitud-us',
    loadChildren: () => import('./pages/solicitud-us/solicitud-us.module').then( m => m.SolicitudUsPageModule)
  },
  {
    path: 'index-adm',
    loadChildren: () => import('./pages/index-adm/index-adm.module').then( m => m.IndexAdmPageModule)
  },
  {
    path: 'reg-us-adm',
    loadChildren: () => import('./pages/reg-us-adm/reg-us-adm.module').then( m => m.RegUsAdmPageModule)
  },
  {
    path: 'reg-uc-adm',
    loadChildren: () => import('./pages/reg-uc-adm/reg-uc-adm.module').then( m => m.RegUcAdmPageModule)
  },
  {
    path: 'reg-viajes-adm',
    loadChildren: () => import('./pages/reg-viajes-adm/reg-viajes-adm.module').then( m => m.RegViajesAdmPageModule)
  },
  {
    path: 'det-viajes-adm',
    loadChildren: () => import('./pages/det-viajes-adm/det-viajes-adm.module').then( m => m.DetViajesAdmPageModule)
  },
  {
    path: 'det-us-adm',
    loadChildren: () => import('./pages/det-us-adm/det-us-adm.module').then( m => m.DetUsAdmPageModule)
  },
  {
    path: 'det-uc-adm',
    loadChildren: () => import('./pages/det-uc-adm/det-uc-adm.module').then( m => m.DetUcAdmPageModule)
  },
  {
    path: 'agregar-us-adm',
    loadChildren: () => import('./pages/agregar-us-adm/agregar-us-adm.module').then( m => m.AgregarUsAdmPageModule)
  },
  {
    path: 'solic-uc-adm',
    loadChildren: () => import('./pages/solic-uc-adm/solic-uc-adm.module').then( m => m.SolicUcAdmPageModule)
  },
  {
    path: 'edit-perf-us',
    loadChildren: () => import('./pages/edit-perf-us/edit-perf-us.module').then( m => m.EditPerfUsPageModule)
  },
  {
    path: 'olvido-contrasena',
    loadChildren: () => import('./pages/olvido-contrasena/olvido-contrasena.module').then( m => m.OlvidoContrasenaPageModule)
  },
  {
    path: 'vehicle-form',
    loadChildren: () => import('./pages/vehicle-form/vehicle-form.module').then(m => m.VehicleFormPageModule)
  },
  {
    path: 'historial-conductor',
    loadChildren: () => import('./pages/historial-conductor/historial-conductor.module').then(m => m.HistorialConductorPageModule)
  },
  {
    path: 'configuracion-vehiculo',
    loadChildren: () => import('./pages/configuracion-vehiculo/configuracion-vehiculo.module').then(m => m.ConfiguracionVehiculoPageModule)
  },
  {
    path: 'confi-vehiculo',
    loadChildren: () => import('./pages/confi-vehiculo/confi-vehiculo.module').then(m => m.ConfiVehiculoPageModule)
  },
  {
    path: 'verificacion-uc',
    loadChildren: () => import('./pages/verificacion-uc/verificacion-uc.module').then(m => m.VerificacionUcPageModule)
  },
  {
    path: 'soli-aceptada-uc',
    loadChildren: () => import('./pages/soli-aceptada-uc/soli-aceptada-uc.module').then(m => m.SoliAceptadaUcPageModule)
  },
  {
    path: 'soli-denegada-uc',
    loadChildren: () => import('./pages/soli-denegada-uc/soli-denegada-uc.module').then(m => m.SoliDenegadaUcPageModule)
  },
  {
    path: 'index-uc',
    loadChildren: () => import('./pages/index-uc/index-uc.module').then(m => m.IndexUcPageModule)
  },
  {
    path: 'crear-viaje-uc',
    loadChildren: () => import('./pages/crear-viaje-uc/crear-viaje-uc.module').then( m => m.CrearViajeUcPageModule)
  },
  {
    path: 'vista-viaje-uc',
    loadChildren: () => import('./pages/vista-viaje-uc/vista-viaje-uc.module').then( m => m.VistaViajeUcPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
