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

  public blogPostList:Array<any>;
  public pageTitle:any;
  public description:any;
  public title:any;

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
            this.pageTitle = data.entity.containers[containerKey].contentlets["uuid-1"][0].title;
            this.description = data.entity.containers[containerKey].contentlets["uuid-1"][0].body;
            this.title = data.entity.containers[containerKey].contentlets["uuid-1"][1].title;

            this.buildPostGrid(posts);


        })
    })
  }

  buildPostGrid(postsList){

    if(postsList !== null && postsList !== undefined){
        let rows = Array<any>();
        for (let i = 0; i < postsList.length; i += 3) { 
            const group = postsList.slice(i, i + 3); 
            rows.push(group); 
        }
        this.blogPostList = rows;
    }

  }

}
