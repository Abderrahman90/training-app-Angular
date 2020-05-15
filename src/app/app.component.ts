import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //session_name = "Formation Mobile";
  //title = "app";
  nbpart: number = 0;
  firstSession = {
    id: 1,
    name: "Formation Web",
    track: "MEAN Stack",
    date: new Date('2020-05-14'),
    duree: 3,
    local: "Lyon",
    participants: 0
  };
  nbrParticipantsChange(event) {
    this.nbpart = event.value;
  }
}
