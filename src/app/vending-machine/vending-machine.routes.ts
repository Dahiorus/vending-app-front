import { Routes } from '@angular/router';
import { ListMachineComponent } from './list-machine/list-machine.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { ViewMachineComponent } from './view-machine/view-machine.component';
import { EditMachineComponent } from './edit-machine/edit-machine.component';

export default [
  {
    path: '',
    component: ListMachineComponent,
  },
  {
    path: 'new',
    component: AddMachineComponent,
  },
  {
    path: ':id',
    component: ViewMachineComponent,
  },
  {
    path: ':id/edit',
    component: EditMachineComponent,
  },
] satisfies Routes;
