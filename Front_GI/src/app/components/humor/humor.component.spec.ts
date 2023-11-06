import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumorComponent } from './humor.component';

describe('HumorComponent', () => {
  let component: HumorComponent;
  let fixture: ComponentFixture<HumorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumorComponent]
    });
    fixture = TestBed.createComponent(HumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
