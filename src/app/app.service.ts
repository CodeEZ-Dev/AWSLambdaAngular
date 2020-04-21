import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class HomeDomainService {

    constructor(private http: HttpClient) { }

    getHomeDetails(API_URL) {
        return this.http.get(API_URL)

    }
}