import { Product } from './services/Product'; 
import { InMemoryStorage } from './services/InMemoryStorage'; 
import { Cart } from './services/Cart'; 

const storage = new InMemoryStorage<Product>();


const cart = new Cart(storage);


const tshirt = new Product("T-shirt", 20);
const jeans = new Product("Jeans", 20);
const sneakers = new Product("Sneakers", 120);

cart.addProduct(tshirt);
cart.addProduct(jeans);
cart.addProduct(sneakers);


console.log(`Total des articles dans le panier: ${cart.getTotalItems()}`); 


console.log("Produits dans le panier:", cart.getProducts());
