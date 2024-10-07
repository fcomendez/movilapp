import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsPage } from './perfil-us.page';

describe('PerfilUsPage', () => {
  let component: PerfilUsPage;
  let fixture: ComponentFixture<PerfilUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
