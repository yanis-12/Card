import { Storable } from '../interfaces/storable';  


export class InMemoryStorage<T> implements Storable<T> {
    private items: T[] = []; 

    
    add(item: T): void {
        this.items.push(item); 
    }

    
    remove(item: T): void {
        
        this.items = this.items.filter(i => i !== item); 
    }

    
    getAll(): T[] {
        return this.items; 
    }

    
    clear(): void {
        this.items = []; 
    }
}
