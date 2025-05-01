import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Entity } from '@model/entity.model';
import { Page } from '@model/page.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.constants';

@Injectable({
  providedIn: 'root',
})
export class WebApiClientService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/hal+json',
    },
  };

  private http = inject(HttpClient);

  getLinks(): Observable<Entity> {
    return this.http.get<Entity>(`${API_BASE_URL}/`, this.httpOptions);
  }

  list<T extends Entity>(
    url: string,
    queryParams: { [key: string]: any } = {}
  ): Observable<Page<T>> {
    const pageParams: HttpParams = new HttpParams({
      fromObject: { ...queryParams },
    });

    return this.http.get<Page<T>>(url, {
      ...this.httpOptions,
      params: pageParams,
    });
  }

  get<T extends Entity>(url: string): Observable<T> {
    return this.http.get<T>(url, this.httpOptions);
  }

  post<T extends Entity>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, this.httpOptions);
  }

  put<T extends Entity>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, this.httpOptions);
  }

  patch<T extends Entity>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(url, body, this.httpOptions);
  }

  delete<T extends Entity>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
