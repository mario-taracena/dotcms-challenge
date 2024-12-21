import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppConstants } from 'app/shared/constants';

@Component({
    selector: 'app-bloglist',
    templateUrl: './bloglist.component.html',
    styleUrls: ['./bloglist.component.scss']
})

export class BlogListComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private authenticationService:AuthenticationService, 
    private http: HttpClient, 
    private appConstants: AppConstants) { }

  ngOnInit() {

    this.authenticationService.getAPIToken().then(token=>{
        this.getBlogIndex(token);
    });
  }


  getBlogIndex(token){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })

    this.http.get<any>(this.appConstants.BLOG_INDEX_URL,{headers}).subscribe({
        next:(data=>{
            const containerKey = Object.keys(data.entity.containers)[0];
            const posts = data.entity.containers[containerKey].contentlets["uuid-1"][1].widgetCodeJSON.posts;
            console.log(posts);
        })
    })
  }
}
