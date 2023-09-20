import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFuncionamentoComponent } from './section-funcionamento.component';

describe('SectionFuncionamentoComponent', () => {
  let component: SectionFuncionamentoComponent;
  let fixture: ComponentFixture<SectionFuncionamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFuncionamentoComponent]
    });
    fixture = TestBed.createComponent(SectionFuncionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
