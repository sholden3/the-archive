import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLinksComponent } from './dropdown-links.component';

describe('DropdownLinksComponent', () => {
  let component: DropdownLinksComponent;
  let fixture: ComponentFixture<DropdownLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
