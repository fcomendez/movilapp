import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegViajesAdmPage } from './reg-viajes-adm.page';

describe('RegViajesAdmPage', () => {
  let component: RegViajesAdmPage;
  let fixture: ComponentFixture<RegViajesAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegViajesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
