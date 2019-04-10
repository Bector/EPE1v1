import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta128Page } from './respuesta128.page';

describe('Respuesta128Page', () => {
  let component: Respuesta128Page;
  let fixture: ComponentFixture<Respuesta128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Respuesta128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Respuesta128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
