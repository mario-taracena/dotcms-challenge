import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'cmp-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

    @Input() element: any;

    constructor() { }

    ngOnInit() {
    }

}
