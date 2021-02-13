import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userName: string = '';
  userResponseData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  search(){
    let observable = this.httpClient.get("https://api.github.com/users/"+this.userName);
    observable.subscribe((jsonData) => {
      this.userResponseData = jsonData;
      console.log(this.userResponseData);
    })
  }
}
