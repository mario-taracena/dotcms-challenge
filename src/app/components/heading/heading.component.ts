import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'cmp-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent implements OnInit {

    @Input() element: any;

    constructor() { }

    ngOnInit() {
    }

}
