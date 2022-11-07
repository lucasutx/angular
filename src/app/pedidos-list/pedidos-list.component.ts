import { Component, OnInit } from '@angular/core';
import {PedidosService} from '../pedidos.service';
import{Pedidos} from '../pedidos';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  pedidos:Pedidos[]=[];
  showFormPedidos=false;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.getPedidos();
  }
  onCloseForm(){
    this.showFormPedidos = false;
    this.getPedidos();
  }
  private getPedidos(){
    this.pedidos = this.pedidosService.getPedidosPendentes();
  }

}
