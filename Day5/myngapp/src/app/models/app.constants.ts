import { Product } from './app.product';
import { Sort } from './App.Sort';
import { constants } from 'buffer';
import { Customer } from './app.customer';
import { Order } from './app.order';

export const Products = [
    new Product(11, "Laptop", 50000, "Electronics"),
    new Product(12, "Desktop", 40000, "Electronics"),
    new Product(13, "Shirt", 500, "Cloth"),
    new Product(14, "Lays", 20, "Food"),
    new Product(15, "Cofee", 50, "Beverages"),
    new Product(16, "Toyata", 100000, "Vehicle")
]

export const DefaultProduct = new Product(0, "", 0, "");

export const Categories = [
    "Electronics",
    "Cloth",
    "Food",
    "Beverages",
    "Vehicle"
]

export const DefaultSort = new Sort("Id", "Asc");

export const Customers = [
    new Customer(1, 'Jhon', 'California'),
    new Customer(2, 'George', 'California'),
    new Customer(3, 'Harry', 'Chicago'),
    new Customer(4, 'Jack', 'Chicago'),
    new Customer(5, 'Jacob', 'Dallas'),
    new Customer(6, 'Noah', 'Dallas'),
    new Customer(7, 'Thomas', 'Seattle'),
];

export const Orders = [
    new Order(11, "Mobile", "Shipped", 1),
    new Order(12, "Mobile", "Packed", 2),
    new Order(13, "Mobile", "Delivered", 3),
    new Order(14, "Mobile", "Received", 4),
    new Order(15, "Laptop", "shipped", 5),
    new Order(16, "Laptop", "Packed", 6),
    new Order(17, "Laptop", "Delivered", 7),
    new Order(18, "Laptop", "Received", 1),
    new Order(19, "Shoes", "shipped", 2),
    new Order(20, "Shoes", "Packed", 3),
    new Order(21, "Shoes", "Delivered", 4),
    new Order(22, "Shoes", "Received", 5),
    new Order(23, "Shirt", "shipped", 6),
    new Order(23, "Shirt", "Received", 7),
]