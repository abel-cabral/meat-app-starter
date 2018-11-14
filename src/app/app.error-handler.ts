import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
  /* Espero receber um error do tipo Response, assim sou obrigado a importar Response de http */
  static handlerError(error: Response | any) {
    let errorMessage: string;

    /* Faco um teste para saber se existe error na minhas resposta */
    if (error instanceof Response) {
      /* Se houver construo uma mensagem default de resposta pro usuário */
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      /*Minha variavel recebe o erro gerado, que foi convertido para string*/
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
