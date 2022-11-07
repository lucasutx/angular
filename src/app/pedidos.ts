export interface Pedidos {
  pedidoNo:number;
  titulo:string;
  descricao:string;
  prioridade:'baixo' | 'alta';
  tipo: 'Funcionalidade'|'Erro'|'Documentação';
  resolvido?: Date;
}
