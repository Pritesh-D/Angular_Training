import { Product } from './app.product';
import { Sort } from './App.Sort';

export const Products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Desktop", 40000, "Electronics"),
    new Product(3, "Shirt", 500, "Cloth"),
    new Product(4, "Lays", 20, "Food"),
    new Product(5, "Cofee", 50, "Beverages"),
    new Product(6, "Toyata", 100000, "Vehicle")
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