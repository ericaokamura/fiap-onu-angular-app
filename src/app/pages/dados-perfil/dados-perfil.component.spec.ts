import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPerfilComponent } from './dados-perfil.component';

describe('DadosPerfilComponent', () => {
  let component: DadosPerfilComponent;
  let fixture: ComponentFixture<DadosPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
