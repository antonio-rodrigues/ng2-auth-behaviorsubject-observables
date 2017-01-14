import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Persisted Auth';

  isLoggedIn : Observable<boolean>;

  constructor( public authService : AuthService ) {
    this.isLoggedIn = authService.isLoggedIn();
  }
}
