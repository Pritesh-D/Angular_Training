import { Injectable, EventEmitter } from '@angular/core';
import { Order } from '../models/app.order';
import { Customer } from '../models/app.customer';
import { Orders, Customers } from '../models/app.constants';

@Injectable({ providedIn: 'root' })
export class CommunicationService {
    customer: Customer;
    orders: Array<Order>;
    customers: Array<Customer>;
    searhEvent: EventEmitter<any>

    constructor() {
        this.searhEvent = new EventEmitter<any>()
        this.orders = Orders
        this.customers = Customers;
        this.customer = null;
    }

    onSearchEvent(obj: any): void {
        this.searhEvent.emit(this.applyPreference(obj));
    }

    applyPreference(cityName: string): Array<Order> {
        let result = new Array<Order>();
        if (cityName) {

            this.orders.forEach((order) => {
                this.customers.forEach((customer) => {
                    if (order.CustomerId == customer.Id && customer.City.toLowerCase().includes(cityName.toLowerCase()))
                        result.push(order);
                })
            });
            return result;
        }
        else
            return this.orders;
    }
}