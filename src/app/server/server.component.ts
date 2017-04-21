import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public color: string;

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    console.log("button clicked");
    this.color = 'green';
  }

}
