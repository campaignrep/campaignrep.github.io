import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventListService } from '../services/event-list.service';

@Component({
  selector: 'app-event-checkin',
  templateUrl: './event-checkin.component.html',
  styleUrls: ['./event-checkin.component.css']
})
export class EventCheckinComponent implements OnInit {

  eventId: any = null;
  eventTypeId: any = null;
  event: any = null;
  loaded = false;
  searchForm: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventListService: EventListService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.eventTypeId = this.route.snapshot.paramMap.get('eventTypeId');
    this.loadEventData();
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loadEventData() {
    this.eventListService.getEventById(this.eventId).subscribe(res => {
      this.event = Object.keys(res).map(e => res[e]);
      this.loaded = true;
    });
  }

}
