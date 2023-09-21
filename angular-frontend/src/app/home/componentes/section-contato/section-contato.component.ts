import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.css']
})
export class SectionContatoComponent {
  public icones: any = {
    whatsapp: faWhatsapp,
    email: faEnvelope,
    instagram: faInstagram,
    facebook: faFacebook
  }
}
