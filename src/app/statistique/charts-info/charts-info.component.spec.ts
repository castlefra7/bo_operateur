import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsInfoComponent } from './charts-info.component';

describe('ChartsInfoComponent', () => {
  let component: ChartsInfoComponent;
  let fixture: ComponentFixture<ChartsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
