import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarUsAdmPage } from './agregar-us-adm.page';

describe('AgregarUsAdmPage', () => {
  let component: AgregarUsAdmPage;
  let fixture: ComponentFixture<AgregarUsAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUsAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
