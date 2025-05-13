import {
  CommonModule,
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { Link, Links } from '@model/entity.model';
import { PageInfo } from '@model/page.model';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  private readonly location: Location = inject(Location);

  baseUrl = input.required<string>();
  pageInfo = input.required<PageInfo>();
  pageLinks = input.required<Links>();

  pageChanged = output<Link>();

  pageNumber = computed(() => this.pageInfo().number + 1);
  firstPage = computed(() => this.pageLinks()['first']);
  previousPage = computed(() => this.pageLinks()['prev']);
  nextPage = computed(() => this.pageLinks()['next']);
  lastPage = computed(() => this.pageLinks()['last']);

  constructor() {}

  changePage(link: Link): void {
    this.pageChanged.emit(link);
    this.updateLocation(link);
  }

  private updateLocation(link: Link) {
    const url = new URL(link.href);
    this.location.go(this.baseUrl(), url.search);
  }
}
