import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountRegister, Client } from 'src/app/services/api/client.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username = 'melonsound';
  private password = '927370B13zapir';

  constructor(private api: Client,
              private authService: AuthService,
              private router: Router) { 

    //check Auth
    let authResult = this.authService.checkAuth();
    if(authResult){
      this.router.navigate(['/']);
    }

    let account = new AccountRegister();
    account.username = this.username;
    account.password = this.password;

    let loginResult = this.api.login(account);
    loginResult.subscribe(value => {
      console.log(value);
      
    });


  }

  ngOnInit(): void {
  }

}
