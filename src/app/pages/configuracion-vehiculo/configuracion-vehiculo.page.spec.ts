import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionVehiculoPage } from './configuracion-vehiculo.page';

describe('ConfiguracionVehiculoPage', () => {
  let component: ConfiguracionVehiculoPage;
  let fixture: ComponentFixture<ConfiguracionVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
