import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // parent to child : component interaction or communication
  @Input('parentData') public channelName;

  //child to parent communication
  @Output() childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey Code fu Panda");
  }
 
  //pipes 
  public userInfos={
    "name":"Panda",
    "profession":"Jnr Software Engineer "
  }


}
