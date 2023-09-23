import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarSubjectService {
  private _alterarEstadoNavBarSubject = new Subject<void>();
  private _alterarSessao = new Subject<Sessao>();

  public get alterarEstadoNavBarSubject(): Subject<void> {
    return this._alterarEstadoNavBarSubject;
  }

  public get alterarSessao(): Subject<Sessao> {
    return this._alterarSessao;
  }

  public alterarSessaoPagina(sessao: Sessao): void {
    this._alterarSessao.next(sessao);
  }

  public trocarEstadoNavBar(): void {
    this._alterarEstadoNavBarSubject.next();
  }
}

export enum EstadoNavBar {
  FECHADO = "FECHADO",
  ABERTO = "ABERTO"
}

export enum Sessao {
  BANNER = "BANNER",
  SERVICO = "SERVICO",
  ORCAMENTO = "ORCAMENTO",
  CONTATO = "CONTATO",
  PORTIFOLIO = "PORTIFOLIO",
  FUNCIONAMENTO = "FUNCIONAMENTO"
}
