
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.communication.service';
import { Customer } from 'src/app/models/app.customer';
import { Customers } from 'src/app/models/app.constants';

@Component({
    selector: 'app-customersender-component',
    templateUrl: './customersender.view.html'
})

export class CustomerSenderComponent implements OnInit {
    Data: Array<Customer>
    SearchQuery: string;

    constructor(private communicationService: CommunicationService) {
        this.Data = Customers;
        this.SearchQuery = "";
    }

    onSearchEvent(): void {
        this.communicationService.onSearchEvent(this.SearchQuery);
    }

    get Headers(): Array<string> {
        let result = new Array<string>();
        for (let property in this.Data[0]) {
            result.push(property);
        }
        return result;
    }

    ngOnInit() { }
}