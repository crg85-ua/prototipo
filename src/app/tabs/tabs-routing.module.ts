import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'crear-evento',
        loadChildren: () => import('../crear-evento/crear-evento.module').then(m => m.CrearEventoPageModule)
      },
      {
        path: 'lista-eventos',
        loadChildren: () => import('../lista-eventos/lista-eventos.module').then(m => m.ListaEventosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/lista-eventos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lista-eventos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
