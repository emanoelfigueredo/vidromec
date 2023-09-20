import { Component } from '@angular/core';
import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-funcionamento',
  templateUrl: './section-funcionamento.component.html',
  styleUrls: ['./section-funcionamento.component.css']
})
export class SectionFuncionamentoComponent {
  public icons: any = {
    localizacao: faLocationDot,
    relogio: faClock,
    calendario: faCalendar
  }
}
