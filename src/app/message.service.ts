import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messagens: string[] = [];

  constructor() { }

  adicionar(mensagem: string){
    this.messagens.push(mensagem);
  }

  limpar(){
    this.messagens = [];
  }

  getMessagens(): void {
    console.log(this.messagens);
  }
}
