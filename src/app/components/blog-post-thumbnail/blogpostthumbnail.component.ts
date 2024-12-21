import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'blog-post-thumbnail',
    templateUrl: './blogpostthumbnail.component.html',
    styleUrls: ['./blogpostthumbnail.component.scss']
})

export class BlogPostThumbnail implements OnInit {

    @Input() post: any;

    constructor() { }

    ngOnInit() {
    }

    getPostFormattedDate(){

    }

}
