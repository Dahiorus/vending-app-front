import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_BASE_URL } from '@app/api.constants';
import { Page } from '@app/model/page.model';
import { VendingMachine } from '@app/model/vending-machine.model';
import { PaginationComponent } from '@app/shared/pagination/pagination.component';
import { WebApiClientService } from '@app/web-api-client.service';
import { Link } from '@model/entity.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-machine',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './list-machine.component.html',
  styleUrl: './list-machine.component.css',
})
export class ListMachineComponent implements OnInit, OnDestroy {
  private apiClient: WebApiClientService = inject(WebApiClientService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private readonly listingUrl: string = `${API_BASE_URL}/vending-machines`;

  pageResponse$!: Observable<Page<VendingMachine>>;

  ngOnInit(): void {
    this.pageResponse$ = this.getPage();
  }

  ngOnDestroy(): void {}

  private getPage(): Observable<Page<VendingMachine>> {
    return this.route.queryParams.pipe(
      switchMap((queryParams) =>
        this.apiClient.list<VendingMachine>(this.listingUrl, queryParams)
      )
    );
  }

  searchMachines(link: Link): void {
    this.pageResponse$ = this.apiClient.get(link.href);
  }
}
