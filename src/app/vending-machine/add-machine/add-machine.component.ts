import { Component, inject } from '@angular/core';
import { API_BASE_URL } from '@app/api.constants';
import { WebApiClientService } from '@app/web-api-client.service';

@Component({
  selector: 'app-add-machine',
  standalone: true,
  imports: [],
  templateUrl: './add-machine.component.html',
  styleUrl: './add-machine.component.css',
})
export class AddMachineComponent {
  private readonly baseUrl: string = `${API_BASE_URL}/vending-machines`;

  private webClient: WebApiClientService = inject(WebApiClientService);
}
