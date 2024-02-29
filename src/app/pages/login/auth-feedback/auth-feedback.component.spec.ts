import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFeedbackComponent } from './auth-feedback.component';

describe('AuthFeedbackComponent', () => {
  let component: AuthFeedbackComponent;
  let fixture: ComponentFixture<AuthFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
