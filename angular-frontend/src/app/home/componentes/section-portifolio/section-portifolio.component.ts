import { Component, OnInit, TemplateRef } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-section-portifolio',
  templateUrl: './section-portifolio.component.html',
  styleUrls: ['./section-portifolio.component.css']
})
export class SectionPortifolioComponent implements OnInit {
  public items!: GalleryItem[];

  constructor(public gallery: Gallery) {
    this.teste()
  }

  public ngOnInit(): void {
    this.items = [
      new ImageItem({ src: "../../../../assets/imgs/servicos/box.jpg", thumb: '../../../../assets/imgs/servicos/box.jpg'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/espelhos.jpg", thumb: '../../../../assets/imgs/servicos/espelhos.jpg'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/esquadrilhas.png", thumb: '../../../../assets/imgs/servicos/esquadrilhas.png'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/guarda-corpo.png", thumb: '../../../../assets/imgs/servicos/guarda-corpo.png'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/janela.jpg", thumb: '../../../../assets/imgs/servicos/janela.jpg'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/pele-de-vidro.jpg", thumb: '../../../../assets/imgs/servicos/pele-de-vidro.jpg'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/policarbonato.webp", thumb: '../../../../assets/imgs/servicos/policarbonato.webp'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/porta-acm.jpg", thumb: '../../../../assets/imgs/servicos/porta-acm.jpg'}),
      new ImageItem({ src: "../../../../assets/imgs/servicos/porta.jpg", thumb: '../../../../assets/imgs/servicos/porta.jpg'})
    ]
  }

  public teste(): void {
    this.gallery.config.thumbHeight = 100;
    this.gallery.config.autoHeight = true;
    this.gallery.config.dots = true;
  }
}
