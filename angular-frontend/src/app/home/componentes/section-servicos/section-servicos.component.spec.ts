import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicosComponent } from './section-servicos.component';

describe('SectionServicosComponent', () => {
  let component: SectionServicosComponent;
  let fixture: ComponentFixture<SectionServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionServicosComponent]
    });
    fixture = TestBed.createComponent(SectionServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
