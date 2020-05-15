import { Component, OnInit } from "@angular/core";
import { Product } from 'src/app/models/app.product';
import { Logic } from 'src/app/models/app.logic';
import { Categories, DefaultProduct, DefaultSort } from 'src/app/models/app.constants';
import { Sort } from 'src/app/models/App.Sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './app.custom.validators';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: "app-product-reactiveform-component",
    templateUrl: "./productreactiveform.view.html"
})

export class ProductReactiveFormComponent implements OnInit {
    Products: Array<Product>;
    Product: Product;
    Logic: Logic;
    Categories: Array<string>
    IsUpdateMode: boolean;
    Headers: Array<string>
    SortInfo: Sort;
    FrmPrd: FormGroup;
    SearchQuery: string;

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
        this.FrmPrd = new FormGroup(
            {
                Id: new FormControl(this.Product.Id, Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(6),
                    Validators.pattern("[0-9]+"),
                    CustomValidators.CheckUniqueValue(this.Products, this.IsUpdateMode)
                ])),
                Name: new FormControl(this.Product.Name),
                Price: new FormControl(this.Product.Price),
                Category: new FormControl(this.Product.Category),
            }
        );
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
        this.Product = Object.assign({}, this.Product, this.FrmPrd.value)
        this.Logic.saveProduct(this.Product);
        this.fetchProducts();
        this.applyPreference();
        this.clear();
    }

    clear(): void {
        this.Product = Object.assign({}, DefaultProduct);
        this.FrmPrd.reset();
        this.IsUpdateMode = false;
        this.FrmPrd.controls.Id.enable();
    }

    search(value: string): void {
        var results = new Array<Product>();
        if (value) {
            this.Headers.forEach(header => {
                this.Logic.getAllProducts().forEach(product => {
                    let val = `${product[header]}`.toLowerCase();
                    if (val.includes(value.toLowerCase()))
                        results.push(product);
                })
            });
            this.Products = results.filter((thing, i, arr) => arr.findIndex(t => t.Id === thing.Id) === i);
            this.SearchQuery = value;
        }
        else
            this.fetchProducts();

    }

    delete(product: Product): void {
        if (this.Logic.deleteProductById(product.Id)) {
            if (this.Product.Id == product.Id)
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
        this.FrmPrd.setValue(this.Product);
        this.IsUpdateMode = true;
        this.FrmPrd.controls.Id.disable();
    }

    applyPreference(): void {
        this.search(this.SearchQuery);
        this.sortBy(this.SortInfo);
    }

    optionSelectEvent(val: string): void { this.FrmPrd.controls.Category.reset(val); }
}