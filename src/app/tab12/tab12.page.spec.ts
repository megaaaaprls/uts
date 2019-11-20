import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab12Page } from './tab12.page';

describe('Tab12Page', () => {
  let component: Tab12Page;
  let fixture: ComponentFixture<Tab12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
