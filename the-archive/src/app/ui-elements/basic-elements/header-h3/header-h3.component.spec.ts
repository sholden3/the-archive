import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderH3Component } from './header-h3.component';

describe('HeaderH3Component', () => {
  let component: HeaderH3Component;
  let fixture: ComponentFixture<HeaderH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderH3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
