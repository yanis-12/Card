import { Storable } from '../interfaces/storable';  

export class LocalStorage<T> implements Storable<T> {
    private storageKey: string; 

    constructor(storageKey: string) {
        this.storageKey = storageKey; 
    }

    add(item: T): void {
        const items = this.getAll(); 
        items.push(item); 
        localStorage.setItem(this.storageKey, JSON.stringify(items)); 
    }

    remove(item: T): void {
        const items = this.getAll().filter(i => i !== item); 
        localStorage.setItem(this.storageKey, JSON.stringify(items)); 
    }

    getAll(): T[] {
        const items = localStorage.getItem(this.storageKey); 
        return items ? JSON.parse(items) : []; 
    }

    
}