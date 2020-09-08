import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-wn-forgotpassword',
  templateUrl: './wn-forgotpassword.component.html',
  styleUrls: ['./wn-forgotpassword.component.css']
})
export class WnForgotpasswordComponent implements OnInit {

  Username: any;
  NewPassword: any;
  repeatPass: any;
  updateData: any;
  LoginData: any;
  url = "https://sample-api-v.herokuapp.com/";
  constructor(private http: HttpClient) { }

  update() {
    if(this.NewPassword == this.repeatPass){
    this.updateData = {
    "Password":  this.NewPassword
    }
  } else{
    alert("New Password and Repeat Password Not Matching");
  }
    for (let i = 0; i < this.LoginData.length; i++) {
      if(this.Username == this.LoginData[i].Username) {
    return this.http.put(this.url, this.updateData).toPromise().then(data => {
      console.log("Updated Data",data);
    })
  }
  }
  }

  ngOnInit() {
    return this.http.get(this.url).toPromise().then((data) => {
      console.log("Url Data from new get", data);
      this.LoginData = data;

    })
  }

}
