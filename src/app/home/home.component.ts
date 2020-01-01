import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  h1Style:boolean=false;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(abc => {
      this.users = abc;
      console.log(this.users);
    });
    
  }

  firstClick(){
    //alert('--- Clicked ---');
    this.h1Style = true;
  }

}
