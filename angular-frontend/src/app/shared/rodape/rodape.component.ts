import { Component } from '@angular/core';
import {
  faClock,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDev,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NavbarSubjectService, Sessao } from 'src/app/home/subjects/navbar-subject.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
})
export class RodapeComponent {
  public icones: any = {
    localizacao: faLocationDot,
    relogio: faClock,
    email: faEnvelope,
    telefone: faPhone,
    instagram: faInstagram,
    facebook: faFacebook,
    dev: faDev,
    web: faGlobe,
  };

  constructor(private readonly navbarSubjectService: NavbarSubjectService) {}

  public emitirEventoAlterarSessao(sessao: string): void {
    this.navbarSubjectService.alterarSessaoPagina(sessao as Sessao);
  }
}
