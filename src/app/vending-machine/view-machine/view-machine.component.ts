import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiClientService } from '@app/shared/service/web-api-client.service';
import { VendingMachine } from '@model/vending-machine.model';
import { map, switchMap } from 'rxjs';
import { VENDING_MACHINE_API_URL } from '@app/api.constants';

@Component({
  selector: 'app-view-machine',
  imports: [CommonModule],
  templateUrl: './view-machine.component.html',
  styleUrl: './view-machine.component.css',
})
export class ViewMachineComponent {
  private readonly apiClient: WebApiClientService = inject(WebApiClientService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  machine$ = model.required<VendingMachine>();

  constructor() {
    this.getMachine().subscribe((response) => this.machine$.set(response));
  }

  private getMachine() {
    return this.route.params.pipe(
      map((params) => params['id']),
      switchMap((id) =>
        this.apiClient.get<VendingMachine>(`${VENDING_MACHINE_API_URL}/${id}`),
      ),
    );
  }
}
