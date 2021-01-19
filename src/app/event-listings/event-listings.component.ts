import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventListService } from '../services/event-list.service';

@Component({
  selector: 'app-event-listings',
  templateUrl: './event-listings.component.html',
  styleUrls: ['./event-listings.component.css']
})
export class EventListingsComponent implements OnInit {

  id: any = null;
  events: any = null;
  loaded = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventListService: EventListService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.loadEvents();
  }

  loadEvents() {
      this.eventListService.getEvents(this.id).subscribe( res => {
          this.events = Object.keys(res).map(e=>res[e]);
          this.loaded = true;
      });
  }

}
