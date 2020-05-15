import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/app.utility.services';

@Component({
    selector: 'app-utilityservice-component',
    template: `<div><h2>utility</h2><h3>{{Length}}</h3><h3>{{Lower}}</h3><h3>{{Upper}}</h3></div>`
})

export class UtilityServiceComponent implements OnInit {
    Name: string;
    Length: number;
    Upper: string;
    Lower: string;

    constructor(private service: UtilityService) { this.Name = "pritesh"; }

    ngOnInit() {
        this.Length = this.service.getLength(this.Name);
        this.Upper = this.service.changeCase(this.Name, "U");
        this.Lower = this.service.changeCase(this.Name, "L");
    }
}