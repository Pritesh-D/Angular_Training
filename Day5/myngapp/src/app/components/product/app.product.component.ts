import { Component, OnInit } from "@angular/core";
import { Product } from 'src/app/models/app.product';
import { Logic } from 'src/app/models/app.logic';
import { Categories, DefaultProduct, DefaultSort } from 'src/app/models/app.constants';
import { Sort } from 'src/app/models/App.Sort';

@Component({
    selector: "app-product-component",
    templateUrl: "./product.view.html"
})

export class ProductComponent implements OnInit {
    Products: Array<Product>;
    Product: Product;
    Logic: Logic;
    Categories: Array<string>
    Headers: Array<string>
    SearchQuery: string;
    IsUpdateMode: boolean;
    SortInfo: Sort

    constructor() {
        this.Logic = new Logic();
        this.Product = Object.assign({}, DefaultProduct);
        this.Products = new Array<Product>();
        this.Categories = Categories;
        this.Headers = this.getHeaders();
        this.IsUpdateMode = false;
        this.SortInfo = DefaultSort;
    }

    ngOnInit(): void {
        this.fetchProducts();
        this.sortBy(this.SortInfo);
    }

    getHeaders(): Array<string> {
        let result = new Array<string>();
        for (let property in DefaultProduct) {
            result.push(property);
        }
        return result;
    }

    fetchProducts(): void {
        this.Products = this.Logic.getAllProducts();
    }

    save(): void {
        this.Logic.saveProduct(Object.assign({}, this.Product));
        this.fetchProducts();
        this.applyPreference();
        this.clear();
    }

    clear(): void {
        this.Product = Object.assign({}, DefaultProduct);
        this.IsUpdateMode = false;
    }

    search(): void {
        var results = new Array<Product>();
        if (this.SearchQuery) {
            this.Headers.forEach(header => {
                this.Logic.getAllProducts().forEach(product => {
                    let val = `${product[header]}`.toLowerCase();
                    if (val.includes(this.SearchQuery.toLowerCase()))
                        results.push(product);
                })
            });
            this.Products = results.filter((thing, i, arr) => arr.findIndex(t => t.Id === thing.Id) === i);
        }
        else
            this.fetchProducts();

    }

    delete(id: number): void {
        if (this.Logic.deleteProductById(id)) {
            if (this.Product.Id == id)
                this.clear();
            this.fetchProducts();
            this.applyPreference();
        }
    }

    sortBy(sort: Sort): void {
        this.Products.sort((a, b) => {
            if (sort.Type == "Asc") return a[sort.Property] > b[sort.Property] ? 1 : -1; return a[sort.Property] > b[sort.Property] ? -1 : 1
        });
    }

    sort(property: string, type: string): void {
        this.SortInfo = new Sort(property, type);
        this.sortBy(this.SortInfo);
    }

    select(product: Product): void {
        this.Product = Object.assign({}, product);
        this.IsUpdateMode = true;
    }

    applyPreference(): void {
        this.search();
        this.sortBy(this.SortInfo);
        this.IsUpdateMode = false;
    }
}