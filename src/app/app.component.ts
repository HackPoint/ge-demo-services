import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, User } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  users$: Observable<User[]>;

  constructor(private readonly _usersData: DataService) {
  }
  ngOnInit(): void {
      this.users$ = this._usersData.getAllUsers();
  }

  handleClick($event: Event) {
    
  }
}
