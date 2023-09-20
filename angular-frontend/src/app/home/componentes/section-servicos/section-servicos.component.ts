import { Servico } from './../../servico';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-servicos',
  templateUrl: './section-servicos.component.html',
  styleUrls: ['./section-servicos.component.css']
})
export class SectionServicosComponent {
  public servicos: Servico[] = [
    { nome: "Pele de vidro", imagem: "../../../../assets/imgs/servicos/pele-de-vidro.jpg", alt: "Prédio com janelas em pele de vidro" },
    { nome: "Esquadrilhas", imagem: "../../../../assets/imgs/servicos/esquadrilhas.png", alt: "Imagem de esquadrilhas" },
    { nome: "Guarda corpo", imagem: "../../../../assets/imgs/servicos/guarda-corpo.png", alt: "Imagem de guarda corpo" },
    { nome: "Portas", imagem: "../../../../assets/imgs/servicos/porta.jpg", alt: "Imagem de Portas" },
    { nome: "Janelas", imagem: "../../../../assets/imgs/servicos/janela.jpg", alt: "Imagem de Janelas" },
    { nome: "Box", imagem: "../../../../assets/imgs/servicos/box.jpg", alt: "Imagem de Box" },
    { nome: "Portas ACM", imagem: "../../../../assets/imgs/servicos/porta-acm.jpg", alt: "Imagem de Porta ACM" },
    { nome: "Espelhos decorativos", imagem: "../../../../assets/imgs/servicos/espelhos.jpg", alt: "Imagem de Espelho decorativo" },
    { nome: "Cobertura policarbonato", imagem: "../../../../assets/imgs/servicos/policarbonato.webp", alt: "Imagem de Cobertura policarbonato" }
  ]
}
