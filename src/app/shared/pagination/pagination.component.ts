import {
  CommonModule,
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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
    styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  private location: Location = inject(Location);

  @Input() baseUrl!: string;
  @Input() pageInfo!: PageInfo;
  @Input() pageLinks!: Links;
  @Output() pageChanged = new EventEmitter<Link>();

  changePage(link: Link): void {
    this.pageChanged.emit(link);
    this.updateLocation(link);
  }

  private updateLocation(link: Link) {
    const url = new URL(link.href);
    this.location.go(this.baseUrl, url.search);
  }
}
