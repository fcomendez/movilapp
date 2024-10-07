import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificacionUcPage } from './verificacion-uc.page';

describe('VerificacionUcPage', () => {
  let component: VerificacionUcPage;
  let fixture: ComponentFixture<VerificacionUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
