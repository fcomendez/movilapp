import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetUcAdmPage } from './det-uc-adm.page';

describe('DetUcAdmPage', () => {
  let component: DetUcAdmPage;
  let fixture: ComponentFixture<DetUcAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetUcAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
