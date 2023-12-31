import {
  NavbarSubjectService,
  EstadoNavBar,
  Sessao,
} from './../../subjects/navbar-subject.service';
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public icones: any = {
    bars: faBars,
    instagram: faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp,
  };
  public sessaoAtual: Sessao = Sessao.SERVICO;

  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public trocarEstadoNavBar(): void {
    this.navbarSubjectService.trocarEstadoNavBar();
  }

  public emitirEventoAlterarSessao(sessao: string): void {
    this.sessaoAtual = sessao as Sessao;
    this.navbarSubjectService.alterarSessaoPagina(sessao as Sessao);
  }
}
