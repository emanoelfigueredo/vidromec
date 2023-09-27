import { Component } from '@angular/core';
import { NavbarSubjectService, Sessao } from '../../subjects/navbar-subject.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public emitirEventoAlterarSessao(sessao: string): void {
    this.navbarSubjectService.alterarSessaoPagina(sessao as Sessao);
  }
}
