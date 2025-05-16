import { Routes } from '@angular/router';
import { ListMachineComponent } from './list-machine/list-machine.component';
import { ViewMachineComponent } from './view-machine/view-machine.component';

export default [
  {
    path: '',
    component: ListMachineComponent,
  },
  {
    path: ':id',
    component: ViewMachineComponent,
  },
] satisfies Routes;
