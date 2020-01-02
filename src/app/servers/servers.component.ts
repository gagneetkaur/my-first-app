import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationsStatus = "No server was added";
  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
    }

  ngOnInit() {
  }

  OnCreateServer(){
    this.serverCreationsStatus = "Server created successFully";
  }
}
