import { Component } from '@angular/core';
import { TodoScreenComponent } from './todo-screen/todo-screen.component';

@Component({
  selector: 'app-menu',
  imports: [TodoScreenComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
          
}
