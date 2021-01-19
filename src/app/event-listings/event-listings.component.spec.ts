import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListingsComponent } from './event-listings.component';

describe('EventListingsComponent', () => {
  let component: EventListingsComponent;
  let fixture: ComponentFixture<EventListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
