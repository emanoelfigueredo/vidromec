import { Component, HostListener, OnInit } from '@angular/core';
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
  public larguraTela: number;
  public alturaHeader: number;

  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public ngOnInit(): void {
    this.larguraTela = window.innerWidth;
    this.escutarEventoTrocaDeSessao();
    this.setarAlturaTela();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.larguraTela = window.innerWidth;
    this.setarAlturaTela();
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
    window.scrollTo(0, window.scrollY - this.alturaHeader);
  }

  private setarAlturaTela(): void {
    if(this.larguraTela < 700) {
      this.alturaHeader = 70;
      return;
    }
    if(this.larguraTela < 900) {
      this.alturaHeader = 80;
      return;
    }
    this.alturaHeader = 90;
  }
}
