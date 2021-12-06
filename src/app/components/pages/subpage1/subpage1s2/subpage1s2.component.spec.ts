import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1s2Component } from './subpage1s2.component';

describe('Subpage1s1Component', () => {
  let component: Subpage1s2Component;
  let fixture: ComponentFixture<Subpage1s2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage1s2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subpage1s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
