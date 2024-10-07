import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicUcAdmPage } from './solic-uc-adm.page';

describe('SolicUcAdmPage', () => {
  let component: SolicUcAdmPage;
  let fixture: ComponentFixture<SolicUcAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicUcAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
