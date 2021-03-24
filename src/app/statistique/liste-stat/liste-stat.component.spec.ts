import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStatComponent } from './liste-stat.component';

describe('ListeStatComponent', () => {
  let component: ListeStatComponent;
  let fixture: ComponentFixture<ListeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
