import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {
    /*Espera receber um array de cardItem e logo em atribuo para ele um array*/
    items: CartItem[] = [];
    /*Preciso ter um método para limpar, ou seja esvaziar os items*/
    clear(): boolean {
        /*Basta resertamos nosso array*/
        this.items = [];
        return true;
    }

    /*Método que soma valores Soma*/
    total(): number {
        /*map troca de cart.item para valor, reduce soma os dois valores */
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0); /* 0 é o valor inicial */
    }

    /*Adiciona elementos ao carrinho*/
    addItem(item: MenuItem) {
        /*Variavel recebe o valor logico da comparacao entre menuItem.id e item.id em suma
        queremos verificar se o objeto passado ja esta listado, se tiver nos apenas aumentamos 
        a quantidade, se nao nos add a lista*/
        let foundItem = this.items.find((mItem) => mItem.MenuItem.id === item.id);
        if (foundItem) {
            foundItem.quantity += 1;
        }else {
             this.items.push(new CartItem(item));
        }
    }

    /*Remove um elemento*/
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        return this;
    }
}