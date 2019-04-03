import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignatura64Page } from './asignatura64.page';

describe('Asignatura64Page', () => {
  let component: Asignatura64Page;
  let fixture: ComponentFixture<Asignatura64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asignatura64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignatura64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
