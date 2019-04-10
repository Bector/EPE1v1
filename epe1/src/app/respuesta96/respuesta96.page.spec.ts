import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuesta96Page } from './respuesta96.page';

describe('Respuesta96Page', () => {
  let component: Respuesta96Page;
  let fixture: ComponentFixture<Respuesta96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Respuesta96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Respuesta96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
