import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FakeHowtouseService } from '@app/services/fake-howtouse.service';

@Injectable({
    providedIn: 'root'
})
export class AdminResolver implements Resolve<any> {
    constructor(
        private fakeService: FakeHowtouseService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.params['id'];

        return this.fakeService.getAllByIdObservable(id)
            .pipe(
                map((data: any) => {
                    if (data.status === false) {
                        return this.router.navigateByUrl('/admin');
                    }
                    return data;
                }, catchError(
                    err => this.router.navigateByUrl('/admin')
                ))
            );
    }
}
