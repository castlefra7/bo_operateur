import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertConfComponent } from './insert-conf.component';

describe('InsertConfComponent', () => {
  let component: InsertConfComponent;
  let fixture: ComponentFixture<InsertConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
