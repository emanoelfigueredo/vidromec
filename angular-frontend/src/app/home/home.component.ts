import { Component, OnInit } from '@angular/core';
import {
  NavbarSubjectService,
  Sessao,
} from './subjects/navbar-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sessaoAtual: Sessao = Sessao.BANNER;
  public urlBase = window.location.origin + window.location.pathname;

  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public ngOnInit(): void {
    this.escutarEventoTrocaDeSessao();
  }

  private escutarEventoTrocaDeSessao(): void {
    this.navbarSubjectService.alterarSessao.subscribe((sessao) => {
      this.sessaoAtual = sessao;
      this.redirecionarSessaoNaPagina();
      this.subirScroll();
    });
  }

  private redirecionarSessaoNaPagina(): void {
    window.location.href = `${this.urlBase}#${this.sessaoAtual}`;
  }

  private subirScroll(): void {
    let subtracao = 70;
    if (
      this.sessaoAtual == Sessao.CONTATO ||
      this.sessaoAtual == Sessao.PORTIFOLIO
    ) {
      subtracao = 80;
    }
    window.scrollTo(0, window.scrollY - subtracao);
  }
}
