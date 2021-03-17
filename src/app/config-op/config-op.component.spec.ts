import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOpComponent } from './config-op.component';

describe('ConfigOpComponent', () => {
  let component: ConfigOpComponent;
  let fixture: ComponentFixture<ConfigOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
