import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoHomeComponent } from './conteudo-home.component';

describe('ConteudoHomeComponent', () => {
  let component: ConteudoHomeComponent;
  let fixture: ComponentFixture<ConteudoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
