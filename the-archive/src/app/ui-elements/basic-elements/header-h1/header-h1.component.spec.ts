import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderH1Component } from './header-h1.component';

describe('HeaderH1Component', () => {
  let component: HeaderH1Component;
  let fixture: ComponentFixture<HeaderH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
