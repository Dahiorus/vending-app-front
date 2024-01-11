import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link, Links } from '@model/entity.model';
import { PageInfo } from '@model/page.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() pageInfo!: PageInfo;
  @Input() pageLinks!: Links;
  @Output() pageChanged = new EventEmitter<Link>();

  changePage(link: Link): void {
    this.pageChanged.emit(link);
  }
}
