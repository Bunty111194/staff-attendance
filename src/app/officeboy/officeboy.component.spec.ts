import { ComponentFixture, TestBed } from '@angular/core/testing';

import { officeboyComponent } from './officeboy.component';

describe('BoardModeratorComponent', () => {
  let component: officeboyComponent;
  let fixture: ComponentFixture<officeboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ officeboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(officeboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
