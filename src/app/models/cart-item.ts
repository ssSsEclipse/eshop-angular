import { Product } from "./product";


export class CartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<CartItem>) {
        Object.assign(this, init);
    }

    get subtotal(): number {
        return this.price * this.quantity;
    }
}