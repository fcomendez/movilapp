import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguridadUsPage } from './seguridad-us.page';

describe('SeguridadUsPage', () => {
  let component: SeguridadUsPage;
  let fixture: ComponentFixture<SeguridadUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
