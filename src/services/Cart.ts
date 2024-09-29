import { Storable } from '../interfaces/storable';  
import { Product } from './Product';


export class Cart {
    private storage: Storable<Product>; 
    private totalItems: number = 0; 

    constructor(storage: Storable<Product>) {
        this.storage = storage; 
    }

    
    addProduct(product: Product): void {
        this.storage.add(product); 
        this.totalItems++; 
    }

    removeProduct(product: Product): void {
        this.storage.remove(product); 
        this.totalItems--; 
    }

    getProducts(): Product[] {
        return this.storage.getAll(); 
    }

    
    getTotalItems(): number {
        return this.totalItems; 
    }


}