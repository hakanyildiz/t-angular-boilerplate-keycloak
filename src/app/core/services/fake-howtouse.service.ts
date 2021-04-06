import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { environment } from '@env';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHowtouseService {
  private path = environment.PATH.PATH1;
  private dataChange: BehaviorSubject<any> = new BehaviorSubject(null);

  data = this.dataChange.asObservable();

  constructor(private apiService: ApiService) { }

  getAll(): void {
    const params = new HttpParams()
      .set('custom-param', 'param-value');

    // according to rest api
    // if http response exist, write condition your response object properties
    this.apiService.get(this.path, params)
      .subscribe(data => {
        if (data && data.ok === false) {
          this.dataChange.next({
            ok: false,
            data: []
          });
        } else {
          this.dataChange.next({
            ok: true,
            data
          })
        }
      })
  }

  getAllByIdObservable(id: any): Observable<any> {
    return this.apiService.get(this.path + '/' + id);
  }
}
