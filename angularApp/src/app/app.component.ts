import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularApp';
   isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
    
      this.isLoginPage = this.router.url === '/';
    });
  }
}
