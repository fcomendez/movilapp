import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearViajeUcPage } from './crear-viaje-uc.page';

describe('CrearViajeUcPage', () => {
  let component: CrearViajeUcPage;
  let fixture: ComponentFixture<CrearViajeUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViajeUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
