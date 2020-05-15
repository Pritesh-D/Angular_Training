import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    loadDefaultProducts() {
        this.constProducts.forEach(ele => { this.products.push(ele) });
    }

    private products: Array<Product>;
    private constProducts = Products;
    constructor() {
        this.products = new Array<Product>();
        this.loadDefaultProducts();
    }

    public getAllProducts(): Array<Product> { return this.products; }

    getProductById(id: number): Product {
        return (this.products.filter(e => { return e.Id == id }) || [])[0];
    }

    getProductsByCategory(category: string): Array<Product> {
        return this.products.filter(e => { return e.Category == category });
    }

    saveProduct(product: Product): Array<Product> {
        if (this.getProductById(product.Id))
            this.products.forEach((e, i) => {
                if (e.Id == product.Id) {
                    this.products[i] = product
                }
            });
        else
            this.products.push(product);
        return this.products;
    }

    deleteProductById(id: number): boolean {
        let filteredProducts = this.products.filter(e => e.Id != id);
        let result = filteredProducts.length < this.products.length;
        if (result)
            this.products = filteredProducts;
        return result;
    }
}