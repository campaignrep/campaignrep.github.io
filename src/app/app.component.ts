import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'campaignrepfe';
  showNav = false;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.authService.getToken());
    const token = this.authService.getToken();
    if (!token || token === null) {            
      this.router.navigate(['login']);
    }
    else {
    this.showNav = true;
    }
  }
}
