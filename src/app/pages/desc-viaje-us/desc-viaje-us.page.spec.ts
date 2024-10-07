import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescViajeUsPage } from './desc-viaje-us.page';

describe('DescViajeUsPage', () => {
  let component: DescViajeUsPage;
  let fixture: ComponentFixture<DescViajeUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescViajeUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
