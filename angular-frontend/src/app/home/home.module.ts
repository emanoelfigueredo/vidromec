import { GalleryConfig, GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ng-gallery/lightbox';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './componentes/banner/banner.component';
import { ServicoComponent } from './componentes/servico/servico.component';
import { SectionServicosComponent } from './componentes/section-servicos/section-servicos.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { SectionPortifolioComponent } from './componentes/section-portifolio/section-portifolio.component';
import { SectionFuncionamentoComponent } from './componentes/section-funcionamento/section-funcionamento.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ServicoComponent,
    SectionServicosComponent,
    TituloComponent,
    SectionPortifolioComponent,
    SectionFuncionamentoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SharedModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ]
})
export class HomeModule { }
