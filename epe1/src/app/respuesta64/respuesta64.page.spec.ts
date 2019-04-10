import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta64Page } from './respuesta64.page';

describe('Respuesta64Page', () => {
  let component: Respuesta64Page;
  let fixture: ComponentFixture<Respuesta64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Respuesta64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Respuesta64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
