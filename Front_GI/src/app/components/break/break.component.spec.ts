import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakComponent } from './break.component';

describe('BreakComponent', () => {
  let component: BreakComponent;
  let fixture: ComponentFixture<BreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakComponent]
    });
    fixture = TestBed.createComponent(BreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
