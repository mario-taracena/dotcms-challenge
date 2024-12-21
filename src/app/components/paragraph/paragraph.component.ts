import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'cmp-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.scss']
})

export class ParagraphComponent implements OnInit {

    @Input() element: any;

    constructor() { }

    ngOnInit() {
        
    }

}
