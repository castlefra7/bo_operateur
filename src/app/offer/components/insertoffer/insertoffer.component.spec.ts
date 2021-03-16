import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertofferComponent } from './insertoffer.component';

describe('InsertofferComponent', () => {
  let component: InsertofferComponent;
  let fixture: ComponentFixture<InsertofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
