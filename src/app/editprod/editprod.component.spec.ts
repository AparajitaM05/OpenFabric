import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodComponent } from './editprod.component';

describe('EditprodComponent', () => {
  let component: EditprodComponent;
  let fixture: ComponentFixture<EditprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprodComponent]
    });
    fixture = TestBed.createComponent(EditprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
