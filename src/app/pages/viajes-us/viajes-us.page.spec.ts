import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesUsPage } from './viajes-us.page';

describe('ViajesUsPage', () => {
  let component: ViajesUsPage;
  let fixture: ComponentFixture<ViajesUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
