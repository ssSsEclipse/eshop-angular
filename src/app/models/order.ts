import { Cart } from './cart';

export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId: string, public shipping: any, cart: Cart) {
        this.datePlaced = new Date().getTime();

        this.items = cart.items.map(i => {
            return {
                product: {
                    id: i.$key,
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.subtotal,
            }
        });
    }
}