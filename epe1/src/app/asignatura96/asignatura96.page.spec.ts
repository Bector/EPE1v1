import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignatura96Page } from './asignatura96.page';

describe('Asignatura96Page', () => {
  let component: Asignatura96Page;
  let fixture: ComponentFixture<Asignatura96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asignatura96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignatura96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
