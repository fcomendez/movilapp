import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoliAceptadaUcPage } from './soli-aceptada-uc.page';

describe('SoliAceptadaUcPage', () => {
  let component: SoliAceptadaUcPage;
  let fixture: ComponentFixture<SoliAceptadaUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliAceptadaUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
