import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_BASE_URL } from '@app/api.constants';
import { Page } from '@app/model/page.model';
import { VendingMachine } from '@app/model/vending-machine.model';
import { PaginationComponent } from '@app/shared/pagination/pagination.component';
import { WebApiClientService } from '@app/shared/service/web-api-client.service';
import { Link } from '@model/entity.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-machine',
  imports: [CommonModule, PaginationComponent],
  templateUrl: './list-machine.component.html',
  styleUrl: './list-machine.component.css',
})
export class ListMachineComponent {
  private readonly apiClient: WebApiClientService = inject(WebApiClientService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  private readonly listingUrl: string = `${API_BASE_URL}/vending-machines`;

  page$ = model.required<Page<VendingMachine>>();

  constructor() {
    this.getPage().subscribe((response) => this.page$.set(response));
  }

  private getPage() {
    return this.route.queryParams.pipe(
      switchMap((queryParams) =>
        this.apiClient.list<VendingMachine>(this.listingUrl, queryParams),
      ),
    );
  }

  searchMachines(link: Link) {
    this.apiClient
      .list<VendingMachine>(link.href)
      .subscribe((response) => this.page$.set(response));
  }
}
