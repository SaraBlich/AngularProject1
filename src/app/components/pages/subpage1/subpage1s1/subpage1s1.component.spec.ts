import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1s1Component } from './subpage1s1.component';

describe('Subpage1s1Component', () => {
  let component: Subpage1s1Component;
  let fixture: ComponentFixture<Subpage1s1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage1s1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subpage1s1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
