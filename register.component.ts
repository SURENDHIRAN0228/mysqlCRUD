import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  StudentArray : any[] = [];

  //currentEmployeeID = "";

  name: string ="";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {

    //this.getAllEmployee();

  }

  register() {

    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8000/student/create",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("registered successfully");

      this.name = '';
      this.email = '';
      this.password = '';
      //this.getAllEmployee();
    });

  }

}
