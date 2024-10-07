import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegUsAdmPage } from './reg-us-adm.page';

describe('RegUsAdmPage', () => {
  let component: RegUsAdmPage;
  let fixture: ComponentFixture<RegUsAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUsAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
