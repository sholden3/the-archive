import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLinkComponent } from './single-link.component';

describe('SingleLinkComponent', () => {
  let component: SingleLinkComponent;
  let fixture: ComponentFixture<SingleLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
