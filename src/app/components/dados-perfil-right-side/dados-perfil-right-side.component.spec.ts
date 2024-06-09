import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPerfilRightSideComponent } from './dados-perfil-right-side.component';

describe('DadosPerfilRightSideComponent', () => {
  let component: DadosPerfilRightSideComponent;
  let fixture: ComponentFixture<DadosPerfilRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPerfilRightSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPerfilRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
