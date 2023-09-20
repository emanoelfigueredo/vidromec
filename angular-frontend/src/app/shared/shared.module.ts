import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RodapeComponent
  ]
})
export class SharedModule { }
