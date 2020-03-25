import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Practise-App';

  // parent to child : component interaction or communication 
  public channelName="Code Fu Panda";

  // child to parent 
  public utubeChannelName ="";
  



}
