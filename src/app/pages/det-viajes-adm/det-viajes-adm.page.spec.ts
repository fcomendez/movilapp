import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetViajesAdmPage } from './det-viajes-adm.page';

describe('DetViajesAdmPage', () => {
  let component: DetViajesAdmPage;
  let fixture: ComponentFixture<DetViajesAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetViajesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
