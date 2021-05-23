// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // tslint:disable-next-line:import-blacklist
// import { repos } from './repos/repo';
// import {environment} from '../environments/environment';
// import { Observable } from 'rxjs/internal/Observable';
// @Injectable()



// export class GithubService {
//   // tslint:disable-next-line:no-inferrable-types
//   baseURL: string = 'https://api.github.com';
//   constructor(private http: HttpClient) {
//   }

//   getRepos(userName: string): Observable<repos[]> {
//        return this.http.get<repos[]>(this.baseURL + '/users/' + userName + '/repos');
//   }
// }