import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUcPage } from './info-uc.page';

describe('InfoUcPage', () => {
  let component: InfoUcPage;
  let fixture: ComponentFixture<InfoUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
