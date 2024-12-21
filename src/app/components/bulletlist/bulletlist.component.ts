import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'cmp-bullet-list',
    templateUrl: './bulletlist.component.html',
    styleUrls: ['./bulletlist.component.scss']
})

export class BulletListComponent implements OnInit {

    @Input() element: any;

    constructor() { }

    ngOnInit() {
    }

}
