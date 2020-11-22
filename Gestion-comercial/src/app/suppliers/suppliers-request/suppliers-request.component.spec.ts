import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersRequestComponent } from './suppliers-request.component';

describe('SuppliersRequestComponent', () => {
  let component: SuppliersRequestComponent;
  let fixture: ComponentFixture<SuppliersRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
