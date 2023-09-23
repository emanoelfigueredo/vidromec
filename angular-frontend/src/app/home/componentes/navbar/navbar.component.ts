import {
  EstadoNavBar,
  NavbarSubjectService,
  Sessao,
} from './../../subjects/navbar-subject.service';
import { Component, OnInit } from '@angular/core';
import {
  faCoins,
  faHelmetSafety,
  faImage,
  faPhone,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public estadoNavBar: EstadoNavBar = EstadoNavBar.FECHADO;
  public icons: any = {
    servico: faHelmetSafety,
    portifolio: faImage,
    orcamento: faCoins,
    contato: faPhone,
    funcionamento: faClock,
  };
  public sessaoAtual: Sessao = Sessao.SERVICO;

  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public ngOnInit(): void {
    this.escutarEventoAlteracaoEstadoNavBar();
  }

  public obterClasseNavbar(): string {
    if (this.estadoNavBar == EstadoNavBar.ABERTO) {
      return 'aberto';
    } else {
      return 'fechado';
    }
  }

  public obterClasseBackdrop(): string {
    if (this.estadoNavBar == EstadoNavBar.ABERTO) {
      return 'backdrop backdrop-aberto';
    } else {
      return 'backdrop backdrop-fechado';
    }
  }

  public emitirEventoAlterarSessao(sessao: string): void {
    this.sessaoAtual = sessao as Sessao;
    this.estadoNavBar = EstadoNavBar.FECHADO;
    this.navbarSubjectService.alterarSessaoPagina(sessao as Sessao);
  }

  private escutarEventoAlteracaoEstadoNavBar(): void {
    this.navbarSubjectService.alterarEstadoNavBarSubject.subscribe(() => {
      if (this.estadoNavBar == EstadoNavBar.ABERTO) {
        this.estadoNavBar = EstadoNavBar.FECHADO;
        return;
      }
      this.estadoNavBar = EstadoNavBar.ABERTO;
    });
  }
}
