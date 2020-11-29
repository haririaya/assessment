import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestSequenceComponent } from './longest-sequence.component';

describe('LongestSequenceComponent', () => {
  let component: LongestSequenceComponent;
  let fixture: ComponentFixture<LongestSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LongestSequenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
