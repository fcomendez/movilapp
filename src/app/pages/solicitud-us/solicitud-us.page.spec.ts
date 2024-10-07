import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudUsPage } from './solicitud-us.page';

describe('SolicitudUsPage', () => {
  let component: SolicitudUsPage;
  let fixture: ComponentFixture<SolicitudUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
