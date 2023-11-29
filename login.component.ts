import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

    
  isLogin: boolean = true;

  errorMessage: string = "";

  constructor(private router: Router, private http: HttpClient) {

    //this.getAllEmployee();

  }


  login() {

    let bodyData = {
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8000/student/login",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      
      if(resultData.status) {
        //this.router.navigateByUrl('/home');
        alert('loged in!')
      }
      else {
        alert("Incorrect email or password");
        console.log("error login");
      }
    });

}
}