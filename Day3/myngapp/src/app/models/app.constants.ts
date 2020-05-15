import { Product } from './app.product';
import { Sort } from './App.Sort';

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