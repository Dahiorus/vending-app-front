import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { PageInfo } from '@model/page.model';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('baseUrl', '/vending-machines');
    fixture.componentRef.setInput('pageInfo', {} as PageInfo);
    fixture.componentRef.setInput('pageLinks', {
      self: {
        href: 'localhost:4200/api/v1/vending-machines?page=1&size=20&sort=createdAt,desc',
      },
      first: {
        href: 'localhost:4200/api/v1/vending-machines?page=1&size=20&sort=createdAt,desc',
      },
      next: {
        href: 'localhost:4200/api/v1/vending-machines?page=2&size=20&sort=createdAt,desc',
      },
      last: {
        href: 'localhost:4200/api/v1/vending-machines?page=10&size=20&sort=createdAt,desc',
      },
    });
    fixture.componentRef.setInput('baseUrl', '/vending-machines');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update location when changing page', () => {
    const spyChangePage = jest.spyOn(component.pageChanged, 'emit');

    component.changePage(component.nextPage());

    expect(spyChangePage).toHaveBeenCalledWith(component.nextPage());
  });
});
