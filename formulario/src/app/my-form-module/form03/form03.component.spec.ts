import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form03Component } from './form03.component';

describe('Form03Component', () => {
  let component: Form03Component;
  let fixture: ComponentFixture<Form03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
