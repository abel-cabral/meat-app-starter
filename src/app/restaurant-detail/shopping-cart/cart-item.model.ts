import { MenuItem } from './../menu-item/menu-item.model';

export class CartItem {
    constructor(
        public MenuItem: MenuItem,
        public quantity: number = 1, /*Caso nao seja passado nada o valor é um. Evita que a conta zere*/
        ) { }

    value(): number {
        /*Basicamente pego o obj que foi passado e vou multiplicar pela quantidade que foi declarada*/
        return this.MenuItem.price * this.quantity;
    }
}