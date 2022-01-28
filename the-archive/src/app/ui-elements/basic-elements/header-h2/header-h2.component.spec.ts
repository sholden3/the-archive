import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderH2Component } from './header-h2.component';

describe('HeaderH2Component', () => {
  let component: HeaderH2Component;
  let fixture: ComponentFixture<HeaderH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderH2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
