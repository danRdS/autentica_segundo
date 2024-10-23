import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNaoAutorizadoComponent } from './tela-nao-autorizado.component';

describe('TelaNaoAutorizadoComponent', () => {
  let component: TelaNaoAutorizadoComponent;
  let fixture: ComponentFixture<TelaNaoAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaNaoAutorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaNaoAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
