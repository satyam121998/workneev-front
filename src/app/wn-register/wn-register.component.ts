import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wn-register',
  templateUrl: './wn-register.component.html',
  styleUrls: ['./wn-register.component.css']
})
export class WnRegisterComponent implements OnInit {
  fullName: string;
  phone: number;
  Email: any;
  Username: any;
  Password: any;
  repeatPass: any;
  url: string = "https://sample-api-v.herokuapp.com/";
  constructor(private http: HttpClient) { }

  register() {
    let postData = {
      "Username" : this.Username,
      "Password" : this.Password,
    }
    if(this.Username && this.Password != "") {
    return this.http.post(this.url, postData).toPromise().then(data => {
      console.log("Posted Data",data);
      
      alert("you are now a happy member, Best Wishes!")
    })
  }
  }

  ngOnInit(): void {
  }

}
