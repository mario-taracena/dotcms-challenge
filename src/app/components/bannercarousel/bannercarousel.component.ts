import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'app/shared/constants';
import { AuthenticationService } from 'app/shared/services/authentication.service';


@Component({
    selector: 'cmp-banner-carousel',
    templateUrl: './bannercarousel.component.html',
    styleUrls: ['./bannercarousel.component.scss']
})

export class BannerCarouselComponent implements OnInit {

    @Input() element: any;

    slides:Array<any>;
    title:any;

    constructor(private authenticationService:AuthenticationService, 
        private http: HttpClient, 
        private appConstants: AppConstants) { }

    ngOnInit() {
        this.authenticationService.getAPIToken().then(token=>{
            this.getCarouselContent(token);
        });


    }

    getCarouselContent(token){
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        this.http.get<any>(`${this.appConstants.CONTENT_API_BASE_URL}/${this.element.identifier}/depth/1`,{headers}).subscribe({
            next:(data=>{
                console.log("carousel data", data)
                this.slides = data.contentlets[0].banners;
                console.log("slides",this.slides)
                this.title = data.contentlets.title;
            })
        });
    }

    getImageURLFromID(id){
        return `${this.appConstants.DOMAIN}/dA/${id}/asset/`
    }

}
