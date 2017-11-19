import { Product } from "./product";
import { CartItem } from "./cart-item";

export class Cart {
    items: CartItem[] = [];

    constructor(private itemsMap: { [productId: string]: CartItem }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new CartItem({
                ...item,
                $key: productId
            }));
        }
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalItemsCount(): number {
        return this.items.reduce((current, item) => current + item.quantity, 0);
    }

    get totalPrice(): number {
        return this.items.reduce((current, item) => current + item.subtotal, 0);
    }
}