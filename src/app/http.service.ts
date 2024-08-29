import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domain, Publisher } from "./types";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    private baseUrl: string = "http://localhost:4300/api";

    constructor(private http: HttpClient) { }

    getPublishers(): Observable<Publisher[]> {
        return this.http.get<Publisher[]>(`${this.baseUrl}/publishers`);
    }

    
    addPublisher(newPublisher: string): Observable<Publisher> {
        return this.http.post<Publisher>(`${this.baseUrl}/publishers`, { publisher: newPublisher });
    }


    getDomainsByPublisher(publisherName: string): Observable<Domain[]> {
        return this.http.get<Domain[]>(`${this.baseUrl}/domains/${publisherName}`);
    }


    updateDomain(publisherName: string, url: string, domain: Domain): Observable<Domain> {
        return this.http.put<Domain>(`${this.baseUrl}/domains/${publisherName}/${url}`, domain);
    }


    deleteDomain(publisherName: string, url: string): Observable<Domain> {
        return this.http.delete<Domain>(`${this.baseUrl}/domains/${publisherName}/${url}`);
    }

}
