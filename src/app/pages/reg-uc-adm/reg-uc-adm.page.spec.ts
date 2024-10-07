import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegUcAdmPage } from './reg-uc-adm.page';

describe('RegUcAdmPage', () => {
  let component: RegUcAdmPage;
  let fixture: ComponentFixture<RegUcAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUcAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
