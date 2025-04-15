import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomeDaPaginaPage } from './nome-da-pagina.page';

describe('NomeDaPaginaPage', () => {
  let component: NomeDaPaginaPage;
  let fixture: ComponentFixture<NomeDaPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeDaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
