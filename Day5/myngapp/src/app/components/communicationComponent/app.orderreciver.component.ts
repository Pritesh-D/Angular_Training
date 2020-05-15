

import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.communication.service';
import { Orders } from 'src/app/models/app.constants';
import { Order } from 'src/app/models/app.order';

@Component({
    selector: 'app-orderreciver-component',
    templateUrl: './orderreciver.view.html'
})

export class OrderReciverComponent implements OnInit {
    OrderData: Array<Order>

    constructor(private communicationService: CommunicationService) {
        this.OrderData = Orders;
    }

    get Headers(): Array<string> {
        let result = new Array<string>();
        for (let property in this.OrderData[0]) {
            result.push(property);
        }
        return result;
    }

    ngOnInit() {
        this.communicationService.searhEvent.subscribe((data) => { this.OrderData = data });
    }
}