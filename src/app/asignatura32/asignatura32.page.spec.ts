import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignatura32Page } from './asignatura32.page';

describe('Asignatura32Page', () => {
  let component: Asignatura32Page;
  let fixture: ComponentFixture<Asignatura32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asignatura32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignatura32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
