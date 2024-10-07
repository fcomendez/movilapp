import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetUsAdmPage } from './det-us-adm.page';

describe('DetUsAdmPage', () => {
  let component: DetUsAdmPage;
  let fixture: ComponentFixture<DetUsAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetUsAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
