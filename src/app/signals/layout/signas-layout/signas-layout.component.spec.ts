import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignasLayoutComponent } from './signas-layout.component';

describe('SignasLayoutComponent', () => {
  let component: SignasLayoutComponent;
  let fixture: ComponentFixture<SignasLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignasLayoutComponent]
    });
    fixture = TestBed.createComponent(SignasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
