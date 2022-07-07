import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-guard-login-nav',
  templateUrl: './guard-login-nav.component.html',
  styleUrls: ['./guard-login-nav.component.scss'],
})
export class GuardLoginNavComponent implements OnInit {
  public isLoggedin$: Observable<boolean> = new Observable<boolean>();
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isLoggedin$ = this.authService.isLoggedIn();
  }

  public logout(): void {
    this.authService.logout();
  }
}
