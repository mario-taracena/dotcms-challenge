import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ContentFetchService {
    constructor(private http: HttpClient) { }

    private blogIndexURL = ""

    getBlogIndex() {
        
    }

}