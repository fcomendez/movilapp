import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaViajeUcPage } from './vista-viaje-uc.page';

describe('VistaViajeUcPage', () => {
  let component: VistaViajeUcPage;
  let fixture: ComponentFixture<VistaViajeUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaViajeUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
