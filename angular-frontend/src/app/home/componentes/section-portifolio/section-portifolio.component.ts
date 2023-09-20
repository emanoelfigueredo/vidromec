import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-section-portifolio',
  templateUrl: './section-portifolio.component.html',
  styleUrls: ['./section-portifolio.component.css'],
})
export class SectionPortifolioComponent implements OnInit {
  public items!: GalleryItem[];

  constructor(public gallery: Gallery) {}

  public ngOnInit(): void {
    this.items = [
      new ImageItem({
        src: '../../../../assets/imgs/servicos/box.jpg',
        thumb: '../../../../assets/imgs/servicos/box.jpg',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/espelhos.jpg',
        thumb: '../../../../assets/imgs/servicos/espelhos.jpg',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/esquadrilhas.png',
        thumb: '../../../../assets/imgs/servicos/esquadrilhas.png',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/guarda-corpo.png',
        thumb: '../../../../assets/imgs/servicos/guarda-corpo.png',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/janela.jpg',
        thumb: '../../../../assets/imgs/servicos/janela.jpg',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/pele-de-vidro.jpg',
        thumb: '../../../../assets/imgs/servicos/pele-de-vidro.jpg',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/policarbonato.webp',
        thumb: '../../../../assets/imgs/servicos/policarbonato.webp',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/porta-acm.jpg',
        thumb: '../../../../assets/imgs/servicos/porta-acm.jpg',
      }),
      new ImageItem({
        src: '../../../../assets/imgs/servicos/porta.jpg',
        thumb: '../../../../assets/imgs/servicos/porta.jpg',
      }),
    ];
    this.configGallery();
  }

  public configGallery(): void {
    this.gallery.config.thumbHeight = 100;
    this.gallery.config.autoHeight = false;
    this.gallery.config.autoPlay = true;
    this.gallery.config.dots = true;
  }
}
