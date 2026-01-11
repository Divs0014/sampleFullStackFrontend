import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = 'auth_token';

//   isLoggedIn(username: string, password: string) {
//     if (username == 'divs' && password == '1234') {
//       return true;
//     }
//     return false;
//   }

  login(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token !== null;
  }
}
