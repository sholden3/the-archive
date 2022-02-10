import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFlexComponent } from './container-flex.component';

describe('ContainerFlexComponent', () => {
  let component: ContainerFlexComponent;
  let fixture: ComponentFixture<ContainerFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
