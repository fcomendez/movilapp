import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexUsPage } from './index-us.page';

describe('IndexUsPage', () => {
  let component: IndexUsPage;
  let fixture: ComponentFixture<IndexUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
