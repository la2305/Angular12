import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) { }


  public login(user: string): void{
    console.log('login với user = ', user);
    if (user !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }
  public logout(): void{
    console.log('log out');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
