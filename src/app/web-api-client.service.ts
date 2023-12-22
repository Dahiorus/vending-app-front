import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

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

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, this.httpOptions);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, this.httpOptions);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, this.httpOptions);
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(url, body, this.httpOptions);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
