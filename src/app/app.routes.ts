import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'vending-machines',
    loadChildren: () => import('./vending-machine/vending-machine.routes'),
  },
  {
    path: '',
    redirectTo: 'vending-machines',
    pathMatch: 'full',
  },
];
