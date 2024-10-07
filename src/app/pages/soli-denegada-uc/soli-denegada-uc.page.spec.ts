import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoliDenegadaUcPage } from './soli-denegada-uc.page';

describe('SoliDenegadaUcPage', () => {
  let component: SoliDenegadaUcPage;
  let fixture: ComponentFixture<SoliDenegadaUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliDenegadaUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
