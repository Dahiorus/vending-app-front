import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_BASE_URL } from '@app/api.constants';
import { WebApiClientService } from '@app/web-api-client.service';
import { VendingMachine } from '@model/vending-machine.model';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-view-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-machine.component.html',
  styleUrl: './view-machine.component.css',
})
export class ViewMachineComponent implements OnInit {
  private apiClient: WebApiClientService = inject(WebApiClientService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private readonly baseUrl: string = `${API_BASE_URL}/vending-machines`;

  machine$!: Observable<VendingMachine>;

  ngOnInit(): void {
    this.machine$ = this.getMachine();
  }

  private getMachine(): Observable<VendingMachine> {
    return this.route.params.pipe(
      map((params) => params['id']),
      switchMap((id) =>
        this.apiClient.get<VendingMachine>(`${this.baseUrl}/${id}`)
      )
    );
  }
}
