import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexAdmPage } from './index-adm.page';

describe('IndexAdmPage', () => {
  let component: IndexAdmPage;
  let fixture: ComponentFixture<IndexAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
