import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrinhoComponent } from './card-carrinho.component';

describe('CardCarrinhoComponent', () => {
  let component: CardCarrinhoComponent;
  let fixture: ComponentFixture<CardCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
