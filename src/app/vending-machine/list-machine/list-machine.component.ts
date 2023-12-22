import { Component, WritableSignal, inject, signal } from '@angular/core';
import { API_BASE_URL } from '../../api.constants';
import { WebApiClientService } from '../../web-api-client.service';
import { Observable } from 'rxjs';
import { Page } from '../../model/page.model';
import { CommonModule } from '@angular/common';
import { VendingMachine } from '../../model/vending-machine.model';

@Component({
  selector: 'app-list-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-machine.component.html',
  styleUrl: './list-machine.component.css',
})
export class ListMachineComponent {
  private baseUrl = `${API_BASE_URL}/vending-machines`;

  private webClient = inject(WebApiClientService);

  link: WritableSignal<string> = signal(this.baseUrl);
  page$: Observable<Page<VendingMachine>> = this.getPage();

  getPage(): Observable<Page<VendingMachine>> {
    return this.webClient.get<Page<VendingMachine>>(this.link());
  }
}
