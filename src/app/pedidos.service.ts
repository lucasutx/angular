import { Injectable } from '@angular/core';
import { Pedidos } from './pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
private pedidos: Pedidos[] = [];
  constructor() { }
  getPedidosPendentes(): Pedidos[]{
    return this.pedidos.filter((pedidos)=> !pedidos.resolvido);
  }
}
