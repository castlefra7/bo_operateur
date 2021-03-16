import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfComponent } from './global-conf.component';

describe('GlobalConfComponent', () => {
  let component: GlobalConfComponent;
  let fixture: ComponentFixture<GlobalConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
