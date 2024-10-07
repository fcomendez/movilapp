import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPerfUsPage } from './edit-perf-us.page';

describe('EditPerfUsPage', () => {
  let component: EditPerfUsPage;
  let fixture: ComponentFixture<EditPerfUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPerfUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
