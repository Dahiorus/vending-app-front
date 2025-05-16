import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VENDING_MACHINE_API_URL } from '@app/api.constants';
import { Page } from '@app/model/page.model';
import { VendingMachine } from '@app/model/vending-machine.model';
import { WebApiClientService } from '@app/shared/service/web-api-client.service';
import { Link } from '@model/entity.model';
import { switchMap } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaginationComponent } from '@app/shared/pagination/pagination.component';

@Component({
  selector: 'app-list-machine',
  imports: [CommonModule, PaginationComponent, MatTableModule],
  templateUrl: './list-machine.component.html',
  styleUrl: './list-machine.component.css',
})
export class ListMachineComponent {
  private readonly apiClient: WebApiClientService = inject(WebApiClientService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  displayedColumns = ['serialNumber', 'type', 'powerStatus', 'workingStatus'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  page$ = model.required<Page<VendingMachine>>();

  dataSource$ = computed(() => {
    const table = new MatTableDataSource(this.page$().elements);
    table.paginator = this.paginator;
    table.sort = this.sort;
    return table;
  });

  constructor() {
    this.getPage().subscribe((response) => this.page$.set(response));
  }

  private getPage() {
    return this.route.queryParams.pipe(
      switchMap((queryParams) =>
        this.apiClient.list<VendingMachine>(
          VENDING_MACHINE_API_URL,
          queryParams,
        ),
      ),
    );
  }

  searchMachines(link: Link) {
    this.apiClient
      .list<VendingMachine>(link.href)
      .subscribe((response) => this.page$.set(response));
  }

  viewMachine(id: string) {
    this.router.navigate(['/vending-machines', id]);
  }
}
