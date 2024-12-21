import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppConstants } from 'app/shared/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blogdetail.component.html',
    styleUrls: ['./blogdetail.component.scss']
})

export class BlogDetailComponent implements OnInit {

    id:any;
    pageTitle:any;
    author:any;
    postDate:any;
    tags:Array<string>;
    content:Array<any>;
    image:any;

    constructor(private authenticationService:AuthenticationService, 
        private http: HttpClient, 
        private appConstants: AppConstants,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.authenticationService.getAPIToken().then(token=>{
            this.getBlogPost(token);
        });
    }

    getBlogPost(token){
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
  
        this.http.get<any>(`${this.appConstants.BLOG_POST_BASE_URL}/${this.id}`,{headers}).subscribe({
            next:(data=>{
                
                console.log(data)

                this.pageTitle = data.entity.urlContentMap.pageTitle;
                this.image = `${this.appConstants.DOMAIN}/dA/${data.entity.urlContentMap.image}/asset/`;
                this.content = data.entity.urlContentMap.blogContent.content; 
                console.log('content',this.content);
            })
        })
    }
}