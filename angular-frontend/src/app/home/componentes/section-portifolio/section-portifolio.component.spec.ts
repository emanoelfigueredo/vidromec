import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortifolioComponent } from './section-portifolio.component';

describe('SectionPortifolioComponent', () => {
  let component: SectionPortifolioComponent;
  let fixture: ComponentFixture<SectionPortifolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPortifolioComponent]
    });
    fixture = TestBed.createComponent(SectionPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
