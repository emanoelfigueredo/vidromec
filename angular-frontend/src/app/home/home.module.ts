import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './componentes/banner/banner.component';
import { ServicoComponent } from './componentes/servico/servico.component';
import { SectionServicosComponent } from './componentes/section-servicos/section-servicos.component';
import { TituloComponent } from './componentes/titulo/titulo.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ServicoComponent,
    SectionServicosComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
