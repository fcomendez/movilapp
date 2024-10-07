import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexUcPage } from './index-uc.page';

describe('IndexUcPage', () => {
  let component: IndexUcPage;
  let fixture: ComponentFixture<IndexUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
