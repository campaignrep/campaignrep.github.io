import { Component, OnInit } from '@angular/core';
import { EventTypesService } from '../services/event-types.service';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.css']
})
export class EventTypesComponent implements OnInit {

  eventTypes: any = null;
  loaded: boolean = false;

  constructor(
    private eventTypeService: EventTypesService
  ) { }

  ngOnInit(): void {
    this.eventTypeService.getEventTypes().subscribe(response => {
        this.eventTypes = response;
        this.loaded = true;
    });
  }

}
