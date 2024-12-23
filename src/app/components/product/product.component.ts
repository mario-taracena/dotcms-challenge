import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'app/shared/constants';
import { AuthenticationService } from 'app/shared/services/authentication.service';


@Component({
    selector: 'cmp-product-promo',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductPromoComponent implements OnInit {

    @Input() element: any;
    product:any;

    constructor(private authenticationService:AuthenticationService, 
        private http: HttpClient, 
        private appConstants: AppConstants) { }

    ngOnInit() {
        this.authenticationService.getAPIToken().then(token=>{
            this.getProductContent(token);
        });
    }

    getProductContent(token){
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        this.http.get<any>(`${this.appConstants.CONTENT_API_BASE_URL}/${this.element.identifier}/depth/1`,{headers}).subscribe({
            next:(data=>{
                this.product = data.contentlets[0];
            })
        });
    }

}
