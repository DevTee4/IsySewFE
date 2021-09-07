import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTrainingComponent } from './paid-training.component';

describe('PaidTrainingComponent', () => {
  let component: PaidTrainingComponent;
  let fixture: ComponentFixture<PaidTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
